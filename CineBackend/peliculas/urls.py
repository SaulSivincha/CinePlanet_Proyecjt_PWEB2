from django.urls import path
from .views import ListaPeliculas, VistaPelicula

urlpatterns = [
    path('', ListaPeliculas.as_view(), name='pelicula-lista'),
    path('<int:id>/', VistaPelicula.as_view(), name='pelicula-vista'),
]