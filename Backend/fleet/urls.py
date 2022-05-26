# from django.urls import path
# from fleet.views import ListCities, ListLocations, ListPickUpPoints, ListSemesters

# urlpatterns = [
#     path('fleet/cities/', ListCities.as_view(), name='city'),
#     path('fleet/locations/', ListLocations.as_view(), name='location'),
#     path('fleet/pickuppoints/', ListPickUpPoints.as_view(), name='pickuppoints'),
#     path('fleet/semesters/', ListSemesters.as_view(), name='semesters'),
# ]

from rest_framework import routers
from .api import CityViewSet, LocationViewSet, PickUpPointViewSet, SemesterViewSet

router = routers.DefaultRouter()
router.register('fleet/cities', CityViewSet, 'cities')
router.register('fleet/locations', LocationViewSet, 'locations')
router.register('fleet/pickuppoints', PickUpPointViewSet, 'pickuppoints')
router.register('fleet/semesters', SemesterViewSet, 'semesters')
# router.register('fleet/sol', SolutionViewSet, 'sol')

urlpatterns = router.urls