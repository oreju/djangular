from rest_framework import serializers

from .models import CarPlate


class CarPlateSerializer(serializers.ModelSerializer):

    class Meta:
        model = CarPlate
        fields = ['id', 'plate_number', 'car_brand', 'car_model', 'owner_name']
