from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Dulceria
from .serializers import DulceriaSerializer

class ListaDulceria(APIView):
    def get(self, request):
        productos = Dulceria.objects.all()
        serializer = DulceriaSerializer(productos, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = DulceriaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class VistaDulceria(APIView):
    def get(self, request, id):
        try:
            producto = Dulceria.objects.get(id=id)
            serializer = DulceriaSerializer(producto)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Dulceria.DoesNotExist:
            return Response({"error": "Producto no encontrado"}, status=status.HTTP_404_NOT_FOUND)

    def put(self, request, id):
        try:
            producto = Dulceria.objects.get(id=id)
        except Dulceria.DoesNotExist:
            return Response({"error": "Producto no encontrado"}, status=status.HTTP_404_NOT_FOUND)

        serializer = DulceriaSerializer(producto, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        try:
            producto = Dulceria.objects.get(id=id)
            producto.delete()
            return Response({"mensaje": "Producto eliminado exitosamente"}, status=status.HTTP_204_NO_CONTENT)
        except Dulceria.DoesNotExist:
            return Response({"error": "Producto no encontrado"}, status=status.HTTP_404_NOT_FOUND)
