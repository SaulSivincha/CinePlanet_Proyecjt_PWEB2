from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Promocion
from .serializers import PromocionSerializer

class ListaPromociones(APIView):
    def get(self, request):
        promociones = Promocion.objects.all()
        serializer = PromocionSerializer(promociones, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = PromocionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class VistaPromocion(APIView):
    def get(self, request, id):
        try:
            promocion = Promocion.objects.get(id=id)
            serializer = PromocionSerializer(promocion)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Promocion.DoesNotExist:
            return Response({"error": "Promoción no encontrada"}, status=status.HTTP_404_NOT_FOUND)

    def put(self, request, id):
        try:
            promocion = Promocion.objects.get(id=id)
        except Promocion.DoesNotExist:
            return Response({"error": "Promoción no encontrada"}, status=status.HTTP_404_NOT_FOUND)

        serializer = PromocionSerializer(promocion, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, id):
        try:
            promocion = Promocion.objects.get(id=id)
            promocion.delete()
            return Response({"mensaje": "Promoción eliminada exitosamente"}, status=status.HTTP_204_NO_CONTENT)
        except Promocion.DoesNotExist:
            return Response({"error": "Promoción no encontrada"}, status=status.HTTP_404_NOT_FOUND)
