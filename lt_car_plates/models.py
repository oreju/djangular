from django.db import models


class CarPlate(models.Model):
    plate_number = models.CharField(max_length=10, unique=True)
    car_brand = models.CharField(max_length=20)
    car_model = models.CharField(max_length=20)
    owner_name = models.CharField(max_length=30)

    def __str__(self):
        return "Car: {}".format(self.plate_number)
