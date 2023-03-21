from django.urls import path
from furniture.views import user_views as views



urlpatterns = [
    path("", views.get_users),
    path("login/", views.MyTokenObtainPairView.as_view()),
    path("register/", views.register_user),
    path("profile/", views.get_user_profile),
    path("profile/update/", views.update_user_profile),
]