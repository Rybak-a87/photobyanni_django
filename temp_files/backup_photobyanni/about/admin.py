from django.contrib import admin
from .models import AboutMe, MyContacts, ContactWithMe


@admin.register(AboutMe)
class AboutMeAdmin(admin.ModelAdmin):
    fields = (
        "profession", "my_name",
        "about_me", "my_photo"
    )
    list_display = ("profession", "my_name", "my_photo")


@admin.register(MyContacts)
class MyContactsAdmin(admin.ModelAdmin):
    fields = ("title", "value")
    list_display = ("title", "value")


@admin.register(ContactWithMe)
class ContactWithMeAdmin(admin.ModelAdmin):
    fields = ("name", "phone", "email", "theme", "text")
    list_display = ("name", "theme", "phone", "email")
