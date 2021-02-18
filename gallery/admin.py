from django.contrib import admin
from django.forms import ModelForm
from django.utils.safestring import mark_safe

from .models import Albums, Gallery


class AlbumsAdminForm(ModelForm):
    # подсказка для загрузки изображения
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        message = "Загружайте изображение c одинаковой шириной и высотой, иначе фото будет отображатся не коректно"
        self.fields["cover"].help_text = mark_safe(f"<span style='color:red;'>{message}</span>")


@admin.register(Albums)
class AlbumsAdmin(admin.ModelAdmin):
    form = AlbumsAdminForm
    fields = ("title", "cover")
    list_display = ("title",)


@admin.register(Gallery)
class GalleryAdmin(admin.ModelAdmin):
    fields = ("name_album", "photo")
    list_display = ("name_album", "get_image")

    # вывод фото в админке
    def get_image(self, obj):
        return mark_safe(f"<img src={obj.photo.url} height='50'>")

    get_image.short_description = "Фото"


# регистрация таблицы с базы данных для панели администратора
# admin.site.register(FamilyTable)
# admin.site.register(BabyTable)
# admin.site.register(LoveStoryTable)
# admin.site.register(PortraitTable)
# admin.site.register(WaddingTable)
# admin.site.register(GalleryTable, GalleryAdmin)
