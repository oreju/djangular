from .api import CarPlateViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'carplates', CarPlateViewSet)

urlpatterns = router.urls
