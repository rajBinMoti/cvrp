from rest_framework import serializers

from fleet.models import City, Location, PickUpPoint, Semester


class SemesterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Semester
        fields = '__all__'

    def create(self, validated_data):
        return Semester.objects.create(**validated_data)


class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = '__all__'

    def create(self, validated_data):
        return City.objects.create(**validated_data)


class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = '__all__'

    def create(self, validated_data):
        return Location.objects.create(**validated_data)


class PickUpPointSerializer(serializers.ModelSerializer):
    class Meta:
        model = PickUpPoint
        fields = '__all__'

    def create(self, validated_data):
        return PickUpPoint.objects.create(**validated_data)
