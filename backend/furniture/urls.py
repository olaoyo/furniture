from django.urls import path
from . import views



urlpatterns = [
    path("users/login/", views.MyTokenObtainPairView.as_view()),
    path("users/register/", views.register_user),

    path("users/profile/", views.get_user_profile),
    path("users/", views.get_users),

    path("furniture/", views.get_furnitures),
    path("furniture/<str:furniture_id>/", views.get_furniture),
]