from django.urls import path
from furniture.views import furniture_views as views



urlpatterns = [
    path("", views.get_furnitures),
    path("<str:furniture_id>/", views.get_furniture),
]