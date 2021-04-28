# Generated by Django 3.1.4 on 2021-02-18 21:28

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AboutMe',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('profession', models.CharField(max_length=30, verbose_name='Професия')),
                ('my_name', models.CharField(max_length=200, verbose_name='Фамилия Имя')),
                ('about_me', models.TextField(verbose_name='Про меня')),
                ('my_photo', models.ImageField(upload_to='about/', verbose_name='Мое фото')),
            ],
            options={
                'verbose_name': 'О себе',
                'verbose_name_plural': 'О себе',
            },
        ),
        migrations.CreateModel(
            name='ContactWithMe',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, verbose_name='Фамилия Имя')),
                ('email', models.CharField(max_length=255, verbose_name='Электронная почта')),
                ('phone', models.CharField(max_length=255, verbose_name='Номер телефона')),
                ('theme', models.CharField(max_length=255, verbose_name='Тема обращения')),
                ('text', models.TextField(verbose_name='Текст сообщения')),
            ],
            options={
                'verbose_name': 'Сообщение фотографу',
                'verbose_name_plural': 'Сообщения фотографу',
            },
        ),
        migrations.CreateModel(
            name='MyContacts',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50, verbose_name='Ресурс')),
                ('value', models.CharField(max_length=50, verbose_name='Связь, ссылка')),
            ],
            options={
                'verbose_name': 'Мой контакт',
                'verbose_name_plural': 'Мои контакты',
            },
        ),
    ]
