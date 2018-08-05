from django.db import models
# from  django.utils.encoding import python_2_unicode_compatible
#
# @python_2_unicode_compatible


# class List(models.Model):
#     name = models.CharField(max_length=50)
#
#     def __str__(self):
#         return "List: {}".format(self.name)

# @python_2_unicode_compatible


class CarPlate(models.Model):
    plate_number = models.CharField(max_length=100)
    car_brand = models.CharField(max_length=100)
    # list = models.ForeignKey(List, related_name="plate")

    def __str__(self):
        return "Car: {}".format(self.plate_number)
