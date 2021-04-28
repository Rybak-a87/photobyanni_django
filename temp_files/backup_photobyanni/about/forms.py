from django import forms

from .models import ContactWithMe


class ContactWithMeForm(forms.ModelForm):
    class Meta:
        model = ContactWithMe
        fields = [
            "name",
            "email",
            "phone",
            "theme",
            "text"
        ]
        widgets = {
            "name": forms.TextInput(attrs={
                "class": "services__form-input",
                "placeholder": "Фамилию и Имя",
                "minlength": "2"
            }),
            "email": forms.TextInput(attrs={
                "class": "services__form-input",
                "placeholder": "Электронную почту"
            }),
            "phone": forms.TextInput(attrs={
                "class": "services__form-input",
                "placeholder": "Номер телефона"
            }),
            "theme": forms.TextInput(attrs={
                "class": "services__form-input",
                "placeholder": "Тема обращения"
            }),
            "text": forms.Textarea(attrs={
                "class": "services__form-textarea",
                "placeholder": "Сообщение",
                "cols": "30",
                "rows": "10",
                "minlength": "10",

            }),
        }
