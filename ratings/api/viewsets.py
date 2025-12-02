from rest_framework import viewsets
from rest_framework.renderers import JSONRenderer
from ratings.models import Rating
from .serializers import RatingSerializer

class RatingViewSet(viewsets.ModelViewSet):
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer
    renderer_classes = [JSONRenderer]
