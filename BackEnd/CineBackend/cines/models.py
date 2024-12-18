from django.db import models

class TipoFuncion(models.Model):
    nombre = models.CharField(max_length=20, unique=True)

    def __str__(self):
        return self.nombre

class Cine(models.Model):
    nombre = models.CharField(max_length=255)
    ubicacion = models.CharField(max_length=255)
    tipos_funcion = models.ManyToManyField(TipoFuncion)
    foto_sede = models.ImageField(upload_to='cines/sedes/', blank=True, null=True)

    def __str__(self):
        return self.nombre
