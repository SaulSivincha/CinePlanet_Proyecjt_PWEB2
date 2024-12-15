from django.contrib import admin
from .models import Dulceria

# Register your models here.
@admin.register(Dulceria)
class DulceriaAdmin(admin.ModelAdmin):
    list_display = ('titulo', 'precio', 'cantidad')