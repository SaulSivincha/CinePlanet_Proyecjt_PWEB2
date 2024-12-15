from django.db import models

# Create your models here.
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

    def __str__(self):
        return f"{self.nombres} {self.apellidos} - {self.correo}"
