from django.contrib import admin
from .models import Pelicula
from django.utils.html import format_html

# Register your models here.
@admin.register(Pelicula)
class PeliculasAdmin(admin.ModelAdmin):
    list_display = ('titulo', 'fecha_lanzamiento', 'mostrar_poster')

    def mostrar_poster(self, obj):
        if obj.poster:
            return format_html('<img src="{}" style="width: 50px; height: auto;" />', obj.poster.url)
        return "Sin Poster"
    mostrar_poster.descripcion = "Poster"