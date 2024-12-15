from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Cine
from .serializers import CineSerializer

class ListaCine(APIView):
    def get(self, request):
        cines = Cine.objects.all()
        serializer = CineSerializer(cines, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = CineSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class VistaCine(APIView):
    def get(self, request, id):
        try:
            cine = Cine.objects.get(id=id)
            serializer = CineSerializer(cine)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Cine.DoesNotExist:
            return Response({"error": "Cine no encontrado"}, status=status.HTTP_404_NOT_FOUND)

    def put(self, request, id):
        try:
            cine = Cine.objects.get(id=id)
        except Cine.DoesNotExist:
            return Response({"error": "Cine no encontrado"}, status=status.HTTP_404_NOT_FOUND)

        serializer = CineSerializer(cine, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        try:
            cine = Cine.objects.get(id=id)
            cine.delete()
            return Response({"mensaje": "Cine eliminado exitosamente"}, status=status.HTTP_204_NO_CONTENT)
        except Cine.DoesNotExist:
            return Response({"error": "Cine no encontrado"}, status=status.HTTP_404_NOT_FOUND)
