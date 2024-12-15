from django.db import models

# Create your models here.
class Dulceria(models.Model):
    imagen = models.ImageField(upload_to='concessions/images/', blank=True, null=True)
    titulo = models.CharField(max_length=100)
    descripcion = models.TextField()
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    cantidad = models.PositiveIntegerField()

    def __str__(self):
        return self.titulo