from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response

from . furniture import furnitures

def get_routes(request):
    return JsonResponse("Hello", safe=False)


@api_view(["GET"])
def get_furnitures(request):
    return Response(furnitures)


@api_view(["GET"])
def get_furniture(request, furniture_id):
    furniture = None
    for mueble in furnitures:
        if mueble["id"] == furniture_id:
            furniture = mueble

    return Response(furniture)