from django.db import models

# Create your models here.
from django.db import models

class User(models.Model):
    SEX_CHOICES = [
        ('M', 'Masculino'),
        ('F', 'Femenino'),
        ('O', 'Otro'),
    ]

    nombres = models.CharField(max_length=100)  # Nombre(s) del usuario
    apellidos = models.CharField(max_length=100)  # Apellido(s) del usuario
    correo = models.EmailField(unique=True)  # Correo electrónico único
    fecha_nacimiento = models.DateField()  # Fecha de nacimiento
    numero_celular = models.CharField(max_length=15, unique=True)  # Número de celular único
    sexo = models.CharField(max_length=1, choices=SEX_CHOICES)  # Sexo con opciones predefinidas

    def __str__(self):
        return f"{self.nombres} {self.apellidos} - {self.correo}"
