from django.urls import path

from .api_views import GalleryListAPIView


app_name = "api"

urlpatterns = [
    path("gallery/", GalleryListAPIView.as_view(), name="gallery_api"),
]
