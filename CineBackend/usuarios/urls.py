from django.urls import path
from .views import ListaUsuarios, VistaUsuario

urlpatterns = [
    path('', ListaUsuarios.as_view(), name='lista-usuarios'),
    path('<int:id>/', VistaUsuario.as_view(), name='vista-usuario'),
]
