from rest_framework import serializers
from django.contrib.auth.models import User

from . models import Furniture


class FurnitureSerialzer(serializers.ModelSerializer):
    class Meta:
        model = Furniture
        fields = "__all__"