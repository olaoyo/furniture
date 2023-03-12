from django.shortcuts import render
from django.http import JsonResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response

from . models import Furniture
from . serializers import FurnitureSerialzer, UserSerializer, UserSerializerWithToken

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView



class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
     def validate(self, attrs):
        data = super().validate(attrs)

        serializer = UserSerializerWithToken(self.user).data

        for key, value in serializer.items():
            data[key] = value

        return data

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(["GET"])
def get_user_profile(request):
    user = request.user
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)


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