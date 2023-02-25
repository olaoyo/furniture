from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response

from . models import Furniture
from . serializers import FurnitureSerialzer

def get_routes(request):
    return JsonResponse("Hello", safe=False)


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