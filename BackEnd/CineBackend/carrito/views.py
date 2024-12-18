from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import Carrito
from .serializers import CarritoSerializer


class CarritoListCreateView(ListCreateAPIView):
    queryset = Carrito.objects.all()
    serializer_class = CarritoSerializer


class CarritoRetrieveUpdateDestroyView(RetrieveUpdateDestroyAPIView):
    queryset = Carrito.objects.all()
    serializer_class = CarritoSerializer
