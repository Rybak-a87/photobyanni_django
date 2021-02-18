from django.urls import path
from . import views


app_name = "gallery"


urlpatterns = [
    path("", views.AlbumsView.as_view(), name="gallery_page")
]
