# Generated by Django 5.0.2 on 2024-02-20 20:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("authorization_app", "0002_rename_user_info_userinfo"),
    ]

    operations = [
        migrations.AddField(
            model_name="userinfo",
            name="username",
            field=models.CharField(default="", max_length=100),
        ),
    ]
