from django.contrib import admin
from .models import Carrito 


class CarritoAdmin(admin.ModelAdmin):
    list_display = ('usuario', 'fecha_creacion', 'producto_dulceria', 'cantidad_dulceria', 'pelicula', 'cantidad_pelicula')
    list_filter = ('fecha_creacion', 'usuario')
    search_fields = ('usuario__nombres', 'usuario__apellidos', 'producto_dulceria__nombre', 'pelicula__titulo')


admin.site.register(Carrito, CarritoAdmin)