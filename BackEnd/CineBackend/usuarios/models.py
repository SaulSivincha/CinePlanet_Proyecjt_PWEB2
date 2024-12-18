from django.db import models
from django.contrib.auth.hashers import make_password

class Usuario(models.Model):
    Opciones_Sexo = [
        ('M', 'Masculino'),
        ('F', 'Femenino'),
        ('O', 'Otro'),
    ]

    nombres = models.CharField(max_length=100)
    apellidos = models.CharField(max_length=100)
    correo = models.EmailField(unique=True)
    fecha_nacimiento = models.DateField()
    numero_celular = models.CharField(max_length=15, unique=True)
    sexo = models.CharField(max_length=1, choices=Opciones_Sexo)
    contrasena = models.CharField(max_length=128)
    es_admin = models.BooleanField(default=False)

    def save(self, *args, **kwargs):
        if not self.pk or not self.contrasena.startswith('pbkdf2_'):  
            self.contrasena = make_password(self.contrasena)
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.nombres} {self.apellidos} - {self.correo}"
