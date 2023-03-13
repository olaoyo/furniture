from django.shortcuts import render

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from furniture.models import Furniture
from furniture.serializers import FurnitureSerialzer

from rest_framework import status


@api_view(["GET"])
def get_furnitures(request):
    furnitures = Furniture.objects.all()
    serializer = FurnitureSerialzer(furnitures, many=True)
    return Response(serializer.data)


@api_view(["GET"])
def get_furniture(request, furniture_id):
    furniture = Furniture.objects.get(_id=furniture_id)
    serializer = FurnitureSerialzer(furniture, many=False)
    return Response(serializer.data)