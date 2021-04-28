from django.shortcuts import render
from django.views.generic import View

from .models import Albums


class AlbumsView(View):
    def get(self, request, *args, **kwargs):
        albums = Albums.objects.all()
        context = {
            "albums": albums,
        }
        return render(request, "gallery/gallery.html", context)
