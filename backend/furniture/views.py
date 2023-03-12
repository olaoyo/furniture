from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response

from . models import Furniture
from . serializers import FurnitureSerialzer

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView



class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
     def validate(self, attrs):
        data = super().validate(attrs)

        data["username"] = self.user.username
        data["first_name"] = self.user.first_name
        data["last_name"] = self.user.last_name
        data["email"] = self.user.email

        

        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

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