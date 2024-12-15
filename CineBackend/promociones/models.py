from django.db import models

# Create your models here.
class Promocion(models.Model):
    titulo = models.CharField(max_length=255)
    imagen = models.ImageField(upload_to='promotions/')
    descripcion = models.TextField()

    def __str__(self):
        return self.titulo