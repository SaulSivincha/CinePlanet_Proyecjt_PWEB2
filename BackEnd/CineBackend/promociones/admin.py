from django.contrib import admin
from .models import Promocion

# Register your models here.
@admin.register(Promocion)
class PromotionAdmin(admin.ModelAdmin):
    list_display = ('titulo',)
    search_fields = ('titulo', 'descripcion')