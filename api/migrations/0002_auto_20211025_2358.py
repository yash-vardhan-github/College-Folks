# Generated by Django 3.2.7 on 2021-10-25 18:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='student',
            name='PasswordResetOTP',
            field=models.CharField(blank=True, default='', max_length=6, null=True),
        ),
        migrations.AddField(
            model_name='student',
            name='PasswordResetting',
            field=models.BooleanField(blank=True, default='False', null=True),
        ),
    ]