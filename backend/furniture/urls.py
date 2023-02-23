from django.urls import path
from . import views


urlpatterns = [
    path("", views.get_routes),
    path("furniture/", views.get_furnitures),
    path("furniture/<str:furniture_id>/", views.get_furniture),
]