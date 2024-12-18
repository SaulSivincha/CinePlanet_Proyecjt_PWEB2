from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework_simplejwt.views import (TokenObtainPairView, TokenRefreshView)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('cines/', include('cines.urls')),
    path('dulceria/', include('dulceria.urls')),
    path('peliculas/', include('peliculas.urls')),
    path('promociones/', include('promociones.urls')),
    path('usuarios/', include('usuarios.urls')),
    path('carrito/', include('carrito.urls')),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)