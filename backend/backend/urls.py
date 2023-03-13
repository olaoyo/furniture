from django.contrib import admin
from django.urls import path, include

from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),

    path("api/users/", include("furniture.urls.user_urls")),
    path("api/furniture/", include("furniture.urls.furniture_urls")),
    path("api/orders/", include("furniture.urls.order_urls")),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)