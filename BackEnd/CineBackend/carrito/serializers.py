from rest_framework import serializers
from .models import Carrito
from usuarios.models import Usuario
from dulceria.serializers import DulceriaSerializer 
from peliculas.serializers import PeliculaSerializer  


class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
        fields = ['correo'] 


class CarritoSerializer(serializers.ModelSerializer):
    usuario = UsuarioSerializer() 
    producto_dulceria = DulceriaSerializer()  
    pelicula = PeliculaSerializer()  

    class Meta:
        model = Carrito
        fields = [
            'id',
            'usuario',              
            'fecha_creacion',        
            'producto_dulceria',    
            'cantidad_dulceria',     
            'pelicula',              
            'cantidad_pelicula',    
        ]
