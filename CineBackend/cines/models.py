from django.db import models

class Cine(models.Model):
    TIPOS_DE_FUNCION = [
        ('2D', '2D'),
        ('3D', '3D'),
        ('REGULAR', 'Regular'),
    ]

    nombre = models.CharField(max_length=255)
    ubicacion = models.CharField(max_length=255)
    tipos_funcion = models.ManyToManyField(
        'TipoFuncion',
        help_text="Seleccione los tipos de funciones disponibles en este cine"
    )

    def __str__(self):
        return self.nombre


class TipoFuncion(models.Model):
    nombre = models.CharField(max_length=20, choices=Cine.TIPOS_DE_FUNCION, unique=True)

    def __str__(self):
        return self.nombre
