from rest_framework.generics import ListAPIView

from .serializers import GallerySerializer
from ..models import Gallery


class GalleryListAPIView(ListAPIView):
    serializer_class = GallerySerializer
    queryset = Gallery.objects.all()
