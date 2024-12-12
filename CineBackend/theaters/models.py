from django.db import models

# Create your models here.
class Theater(models.Model):
    FUNCTION_TYPE_CHOICES = [
        ('2D', '2D'),
        ('3D', '3D'),
        ('REGULAR', 'Regular'),
    ]

    name = models.CharField(max_length=255)
    location = models.CharField(max_length=255)
    function_types = models.ManyToManyField(
        'FunctionType',
        help_text="Select function types available in this theater"
    )

    def __str__(self):
        return self.name

class FunctionType(models.Model):
    name = models.CharField(max_length=20, choices=Theater.FUNCTION_TYPE_CHOICES, unique=True)

    def __str__(self):
        return self.name
