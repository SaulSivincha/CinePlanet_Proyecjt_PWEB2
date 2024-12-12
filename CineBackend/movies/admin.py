from django.contrib import admin
from django.utils.html import format_html
from .models import Movie

# Register your models here.
@admin.register(Movie)
class MovieAdmin(admin.ModelAdmin):
    list_display = ('title', 'release_date', 'show_poster')

    def show_poster(self, obj):
        if obj.poster:
            return format_html('<img src="{}" style="width: 50px; height: auto;" />', obj.poster.url)
        return "No Poster"
    show_poster.short_description = "Poster"