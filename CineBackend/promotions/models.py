from django.db import models

# Create your models here.
class Promotion(models.Model):
    title = models.CharField(max_length=255)
    image = models.ImageField(upload_to='promotions/')
    description = models.TextField()

    def __str__(self):
        return self.title
