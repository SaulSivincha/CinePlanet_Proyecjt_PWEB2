from django.db import models

# Create your models here.
class Pelicula(models.Model):
    titulo = models.CharField(max_length=200)
    descripcion = models.TextField()
    poster = models.ImageField(upload_to='posters/')
    fecha_lanzamiento = models.DateField()

    def __str__(self):
        return self.titulo