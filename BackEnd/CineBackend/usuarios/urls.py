from django.urls import path
from .views import ListaUsuarios, VistaUsuario, RegistroUsuario, CustomTokenView

urlpatterns = [
    path('', ListaUsuarios.as_view(), name='lista-usuarios'),
    path('<int:id>/', VistaUsuario.as_view(), name='vista-usuario'),
    path('register/', RegistroUsuario, name='registro-usuario'),
    path('token/', CustomTokenView.as_view(), name='token_obtain'),
]
