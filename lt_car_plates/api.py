from rest_framework.viewsets import ModelViewSet

from .serializers import CarPlateSerializer
from .models import CarPlate


class CarPlateViewSet(ModelViewSet):
    queryset = CarPlate.objects.all()
    serializer_class = CarPlateSerializer
