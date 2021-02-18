from rest_framework import serializers

from ..models import Gallery


class GallerySerializer(serializers.ModelSerializer):
    name_album = serializers.CharField(required=True)
    photo = serializers.ImageField(required=True)

    class Meta:
        model = Gallery
        fields = ("name_album", "photo")
