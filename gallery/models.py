from django.db import models
from django.core.files.uploadedfile import InMemoryUploadedFile

import sys
from io import BytesIO
from PIL import Image


class Albums(models.Model):
    title = models.CharField(verbose_name="Имя альбома", max_length=50)
    cover = models.ImageField(verbose_name="Обложка альбома", upload_to="cover/")

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Альбом"
        verbose_name_plural = "Альбомы"

    # изменение размера фото
    def save(self, *args, **kwargs):
        image = self.cover
        img = Image.open(image)
        new_img = img.convert("RGB")
        resize_new_img = new_img.resize((400, 400),
                                        resample=Image.ANTIALIAS)
        filestream = BytesIO()  # преобразование изображения в поток данных (байты)
        resize_new_img.save(filestream, "JPEG", quality=90)  # сохранить изображение в filestream, формат, качество
        filestream.seek(0)
        name = ".".join(self.cover.name.split('.'))
        self.cover = InMemoryUploadedFile(
            filestream, "imageField", name, "jpeg/image", sys.getsizeof(filestream), None
        )
        super().save(*args, **kwargs)


class Gallery(models.Model):
    name_album = models.ForeignKey(
        Albums, on_delete=models.CASCADE, verbose_name="Альбом"
    )
    photo = models.ImageField(verbose_name="Фото", upload_to="gallery/")
    date = models.DateField(auto_now=True)

    def __str__(self):
        return self.name_album.title

    class Meta:
        verbose_name = "Фотография"
        verbose_name_plural = "Фотографии"

    # сжатие фото пропорционально
    def save(self, *args, **kwargs):
        image = self.photo
        img = Image.open(image)
        new_img = img.convert("RGB")
        re_height = 600
        percent = round((re_height * 100) / img.height)
        re_width = round((img.width * percent) / 100)
        resize_new_img = new_img.resize((re_width, re_height),
                                        resample=Image.ANTIALIAS)
        filestream = BytesIO()  # преобразование изображения в поток данных (байты)
        resize_new_img.save(filestream, "JPEG", quality=90)  # сохранить изображение в filestream, формат, качество
        filestream.seek(0)
        name = ".".join(self.photo.name.split('.'))
        self.photo = InMemoryUploadedFile(
            filestream, "imageField", name, "jpeg/image", sys.getsizeof(filestream), None
        )
        super().save(*args, **kwargs)
