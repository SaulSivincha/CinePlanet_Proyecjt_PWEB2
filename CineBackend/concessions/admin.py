from django.contrib import admin
from .models import Concession

@admin.register(Concession)
class ConcessionAdmin(admin.ModelAdmin):
    list_display = ('title', 'price', 'quantity')
