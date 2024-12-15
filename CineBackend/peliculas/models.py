from django.db import models

class Pelicula(models.Model):
    titulo = models.CharField(max_length=200,)
    sinopsis = models.TextField() 
    idioma = models.CharField(max_length=50)
    disponible = models.BooleanField(default=True)
    poster = models.ImageField(upload_to='posters/')
    fecha_lanzamiento = models.DateField()

    def __str__(self):
        return self.titulo