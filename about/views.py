from django.shortcuts import render
from django.views.generic.base import View
from django.http import HttpResponseRedirect

from .models import AboutMe, MyContacts
from .forms import ContactWithMeForm


class AboutView(View):
    def get(self, request, *args, **kwargs):
        about_me = AboutMe.objects.first()
        return render(request, "about/about.html", {"about_me": about_me})


class ContactsView(View):
    def get(self, request, *args, **kwargs):
        contacts = MyContacts.objects.all()
        return render(request, "about/contacts.html", {"contacts": contacts})


class ConnectWithMeView(View):
    def get(self, request, *args, **kwargs):
        form = ContactWithMeForm(request.POST or None)
        context = {
            "form": form,
        }
        return render(request, "about/form_to_connect.html", context)

    def post(self, request, *args, **kwargs):
        form = ContactWithMeForm(request.POST or None)
        if form.is_valid():
            new_message = form.save(commit=False)
            new_message.name = form.cleaned_data["name"]
            new_message.email = form.cleaned_data["email"]
            new_message.phone = form.cleaned_data["phone"]
            new_message.text = form.cleaned_data["text"]
            new_message.save()
            return HttpResponseRedirect("/")
        context = {
            "form": form,
        }
        return render(request, "about/form_to_connect.html", context)


