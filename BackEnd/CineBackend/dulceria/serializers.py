from rest_framework import serializers
from .models import Dulceria

class DulceriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dulceria
        fields = '__all__'