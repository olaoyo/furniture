from django.urls import path
from furniture.views import order_views as views



urlpatterns = [
   path("add/", views.add_order_items),
   path("<str:order_id>/", views.get_order_by_id),
]