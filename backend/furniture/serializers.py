from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from . models import Furniture



class UserSerializer(serializers.ModelSerializer):
    _id = serializers.SerializerMethodField(read_only=True)
    name = serializers.SerializerMethodField(read_only=True)
    surname = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        fields = ["id", "_id", "username", "name", "surname", "email", "isAdmin"]

    def get__id(self, obj):
        return obj.id

    def get_name(self, obj):
        return obj.first_name
    
    def get_surname(self, obj):
        return obj.last_name
    
    def get_isAdmin(self, obj):
        return obj.is_staff


class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        fields = ["id", "_id", "username", "name", "surname", "email", "isAdmin", "token"]

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)


class FurnitureSerialzer(serializers.ModelSerializer):
    class Meta:
        model = Furniture
        fields = "__all__"