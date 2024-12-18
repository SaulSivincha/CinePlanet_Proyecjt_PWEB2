from django.urls import path
from .views import ListaCines, ListaTiposFuncion, VistaCine

urlpatterns = [
    path('', ListaCines.as_view(), name='cine-lista'),
    path('<int:id>/', VistaCine.as_view(), name='cine-vista'),
    path('tipos-funcion/', ListaTiposFuncion.as_view(), name='lista-tipos-funcion')
]