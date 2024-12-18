from django.db import models
from dulceria.models import Dulceria
from peliculas.models import Pelicula
from usuarios.models import Usuario

class Carrito(models.Model):
    usuario = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    producto_dulceria = models.ForeignKey(Dulceria, on_delete=models.CASCADE, null=True, blank=True)
    pelicula = models.ForeignKey(Pelicula, on_delete=models.CASCADE, null=True, blank=True)
    cantidad_dulceria = models.PositiveIntegerField(default=0)
    cantidad_pelicula = models.PositiveIntegerField(default=0)
    fecha_creacion = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Carrito {self.id} de {self.usuario}"
