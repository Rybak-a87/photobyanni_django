from django.urls import path
from . import views


app_name = "about"


urlpatterns = [
    path("", views.AboutView.as_view(), name="about_page"),
    path("contacts/", views.ContactsView.as_view(), name="contacts_page"),
    path("contacts/contact_with_me", views.ConnectWithMeView.as_view(), name="contact_with_me_page"),
]
