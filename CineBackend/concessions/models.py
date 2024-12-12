from django.db import models

class Concession(models.Model):
    image = models.ImageField(upload_to='concessions/images/', blank=True, null=True)  # Para cargar imágenes
    title = models.CharField(max_length=100)  # Título con un límite de 100 caracteres
    description = models.TextField()  # Campo para descripciones más largas
    price = models.DecimalField(max_digits=10, decimal_places=2)  # Precio con hasta 2 decimales
    quantity = models.PositiveIntegerField()  # Cantidad como un número entero positivo

    def __str__(self):
        return self.title
