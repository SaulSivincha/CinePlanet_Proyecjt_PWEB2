from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Pelicula
from .serializers import PeliculaSerializer

class ListaPeliculas(APIView):
    def get(self, request):
        peliculas = Pelicula.objects.all()
        serializer = PeliculaSerializer(peliculas, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = PeliculaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class VistaPelicula(APIView):
    def get(self, request, id):
        try:
            pelicula = Pelicula.objects.get(id=id)
            serializer = PeliculaSerializer(pelicula)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Pelicula.DoesNotExist:
            return Response({"error": "Película no encontrada"}, status=status.HTTP_404_NOT_FOUND)

    def put(self, request, id):
        try:
            pelicula = Pelicula.objects.get(id=id)
        except Pelicula.DoesNotExist:
            return Response({"error": "Película no encontrada"}, status=status.HTTP_404_NOT_FOUND)

        serializer = PeliculaSerializer(pelicula, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        try:
            pelicula = Pelicula.objects.get(id=id)
            pelicula.delete()
            return Response({"mensaje": "Película eliminada exitosamente"}, status=status.HTTP_204_NO_CONTENT)
        except Pelicula.DoesNotExist:
            return Response({"error": "Película no encontrada"}, status=status.HTTP_404_NOT_FOUND)
