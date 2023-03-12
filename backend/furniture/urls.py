from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenObtainPairView



urlpatterns = [
    path("users/login/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("", views.get_routes),
    path("furniture/", views.get_furnitures),
    path("furniture/<str:furniture_id>/", views.get_furniture),
]