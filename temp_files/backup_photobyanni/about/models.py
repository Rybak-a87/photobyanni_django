from django.db import models
from django.core.files.uploadedfile import InMemoryUploadedFile

import sys
from io import BytesIO
from PIL import Image


class AboutMe(models.Model):
    profession = models.CharField(max_length=30, verbose_name="Професия")
    my_name = models.CharField(max_length=200, verbose_name="Фамилия Имя")
    about_me = models.TextField(verbose_name="Про меня")
    my_photo = models.ImageField(upload_to="about/", verbose_name="Мое фото")

    def __str__(self):
        return self.profession

    class Meta:
        verbose_name = "О себе"
        verbose_name_plural = "О себе"

    # сжатие фото пропорционально
    def save(self, *args, **kwargs):
        image = self.my_photo
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
        name = ".".join(self.my_photo.name.split('.'))
        self.my_photo = InMemoryUploadedFile(
            filestream, "imageField", name, "jpeg/image", sys.getsizeof(filestream), None
        )
        super().save(*args, **kwargs)


class MyContacts(models.Model):
    title = models.CharField(verbose_name="Ресурс", max_length=50)
    value = models.CharField(verbose_name="Связь, ссылка", max_length=50)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Мой контакт"
        verbose_name_plural = "Мои контакты"


class ContactWithMe(models.Model):
    name = models.CharField(verbose_name="Фамилия Имя", max_length=255)
    email = models.CharField(verbose_name="Электронная почта", max_length=255)
    phone = models.CharField(verbose_name="Номер телефона", max_length=255)
    theme = models.CharField(verbose_name="Тема обращения", max_length=255)
    text = models.TextField(verbose_name="Текст сообщения")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Сообщение фотографу"
        verbose_name_plural = "Сообщения фотографу"
