from .serializers import *
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import permissions, status

# from fleet.models import City, Location, Semester, PickUpPoint

# @api_view(['GET'])
# def get_current_user(request):
#     serializer = UserSerializer(request.user)
#     return Response(serializer.data)


# class DataView(APIView):
#     def get(self, request):
#         cities = [city.name for city in City.objects.all()]
#         locations = [location.name for location in Location.objects.all()]
#         pickuppoints = [pickUpPoint.__str__()
#                         for pickUpPoint in PickUpPoint.objects.all()]
#         semesters = [semester.name for semester in Semester.objects.all()]
#         return Response({"cities": cities, "locations": locations, "pickuppoints": pickuppoints, "semesters":  semesters})


class UserView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, format=None):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)


class UserRegisterView(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        serializer = UserRegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
