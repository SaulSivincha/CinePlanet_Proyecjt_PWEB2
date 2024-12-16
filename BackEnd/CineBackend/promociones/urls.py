from django.urls import path
from .views import ListaPromociones, VistaPromocion

urlpatterns = [
    path('', ListaPromociones.as_view(), name='lista-promociones'),
    path('<int:id>/', VistaPromocion.as_view(), name='vista-promocion'),
]
