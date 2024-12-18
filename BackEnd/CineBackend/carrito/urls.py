from django.urls import path
from .views import CarritoListCreateView, CarritoRetrieveUpdateDestroyView

urlpatterns = [
    path('', CarritoListCreateView.as_view(), name='carrito-list-create'),  
    path('<int:pk>/', CarritoRetrieveUpdateDestroyView.as_view(), name='carrito-detail'),
]
