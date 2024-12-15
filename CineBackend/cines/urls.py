from django.urls import path
from .views import ListaCine, VistaCine

urlpatterns = [
    path('', ListaCine.as_view(), name='cine-lista'),
    path('<int:id>/', VistaCine.as_view(), name='cine-vista'),
]