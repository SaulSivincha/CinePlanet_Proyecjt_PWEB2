from rest_framework import serializers
from .models import Usuario
from django.contrib.auth.hashers import check_password
from rest_framework_simplejwt.tokens import RefreshToken

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = '__all__'

class CustomTokenSerializer(serializers.Serializer):
    correo = serializers.EmailField()
    contrasena = serializers.CharField(write_only=True)

    def validate(self, attrs):
        correo = attrs.get('correo')
        contrasena = attrs.get('contrasena')

        try:
            usuario = Usuario.objects.get(correo=correo)
        except Usuario.DoesNotExist:
            raise serializers.ValidationError("Correo electrónico o contraseña incorrectos.")

        if not check_password(contrasena, usuario.contrasena):
            raise serializers.ValidationError("Correo electrónico o contraseña incorrectos.")

        refresh = RefreshToken.for_user(usuario)

        return {
            'access': str(refresh.access_token),
            'refresh': str(refresh),
            'nombres': usuario.nombres,
            'apellidos': usuario.apellidos,
            'esAdmin': usuario.es_admin,
        }