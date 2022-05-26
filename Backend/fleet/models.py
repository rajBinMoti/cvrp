from django.db import models


class Semester(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=32)
    active = models.BooleanField(default=True)
    current = models.BooleanField(default=True)
    remarks = models.CharField(max_length=256, blank=True)

    def __str__(self) -> str:
        return self.name


class City(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=32)
    active = models.BooleanField(default=True)
    remarks = models.CharField(max_length=256, blank=True)

    def __str__(self) -> str:
        return self.name


class Location(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=128)
    longitude = models.DecimalField(
        max_digits=21, decimal_places=10, blank=True)
    latitude = models.DecimalField(
        max_digits=21, decimal_places=10, blank=True)
    city = models.ForeignKey(City, on_delete=models.CASCADE)
    remarks = models.CharField(max_length=256, blank=True)
    active = models.BooleanField(default=True)

    def __str__(self) -> str:
        return self.name


class PickUpPoint(models.Model):
    id = models.BigAutoField(primary_key=True)
    user_id = models.CharField(max_length=32, blank=True)
    roll_no = models.CharField(max_length=32, blank=True)
    location = models.ForeignKey(Location, on_delete=models.CASCADE)
    semester = models.ForeignKey(Semester, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.id
