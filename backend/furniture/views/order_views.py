from django.shortcuts import render

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from furniture.models import Furniture, Order, OrderItem, ShippingAddress
from furniture.serializers import OrderSerializer

from rest_framework import status


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_order_items(request):
    user = request.user
    data = request.data

    order_items = data["orderItems"]

    if order_items and len(order_items) == 0:
        return Response({"detail": "No Order Items"}, status=status.HTTP_400_BAD_REQUEST)
    else:

        # (1) Create order

        order = Order.objects.create(
            user = user,
            paymentMethod = data["paymentMethod"],
            taxPrice = data["taxPrice"],
            shippingPrice = data["shippingPrice"],
            totalPrice = data["totalPrice"],
        )

        # (2) Create shipping address

        shipping = ShippingAddress.objects.create(
            order=order,
            address=data["shippingAddress"]["address"],
            city=data["shippingAddress"]["city"],
            postalCode=data["shippingAddress"]["postalCode"],
            country=data["shippingAddress"]["country"],
        )

        # (3) Create order items and set order to orderItem relationship

        for ordered_furniture in order_items:
            furniture = Furniture.objects.get(_id=ordered_furniture["id"])

            item = OrderItem.objects.create(
                furniture=furniture,
                order=order,
                name=furniture.name,
                qty=ordered_furniture["qty"],
                price=ordered_furniture["price"],
                image=furniture.image.url,
            )

            # (4) Update stock

            furniture.countInStock -= item.qty
            furniture.save()
            
        serializer = OrderSerializer(order, many=False)
        return Response(serializer.data)
    


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_order_by_id(request, order_id):

    user = request.user

    try:
        order = Order.objects.get(_id = order_id)

        if user.is_staff or order.user == user:
            serializer = OrderSerializer(order, many = False)

            return Response(serializer.data)
        
        else:
            return Response({ "detail": "Unfortunately, you are not authorized to view this order" }, status = status.HTTP_401_UNAUTHORIZED)

    except: 
        return Response({ "detail": "Your selected order does not exist" }, status = status.HTTP_404_NOT_FOUND)