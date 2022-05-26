from django.contrib import admin
from fleet.models import City, Location, PickUpPoint, Semester

# Register your models here.


class CityModel(admin.ModelAdmin):
    list_display = ['id', 'name']
    ordering = ['id']


admin.site.register(City, CityModel)


class LocationModel(admin.ModelAdmin):
    list_display = ['id', 'name', 'city_id']
    ordering = ['id']


admin.site.register(Location, LocationModel)


class PickUpPointModel(admin.ModelAdmin):
    list_display = ['id', 'roll_no']
    ordering = ['id']


admin.site.register(PickUpPoint, PickUpPointModel)


class SemesterModel(admin.ModelAdmin):
    list_display = ['id', 'name']
    ordering = ['id']


admin.site.register(Semester, SemesterModel)
