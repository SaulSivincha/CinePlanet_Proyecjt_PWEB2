from django.urls import path
from .views import ListaDulceria, VistaDulceria

urlpatterns = [
    path('', ListaDulceria.as_view(), name='lista-dulceria'),
    path('<int:id>/', VistaDulceria.as_view(), name='vista-dulceria'),
]