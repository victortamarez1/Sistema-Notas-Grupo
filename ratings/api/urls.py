from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import RatingViewSet

router = DefaultRouter()
router.register(r'ratings', RatingViewSet)

urlpatterns = router.urls
