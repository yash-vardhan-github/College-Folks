# Generated by Django 3.2.7 on 2021-10-11 18:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0020_alter_student_hostel'),
    ]

    operations = [
        migrations.AddField(
            model_name='student',
            name='Image',
            field=models.TextField(blank=True, default='', null=True),
        ),
        migrations.AddField(
            model_name='student',
            name='IsformSubmitted',
            field=models.TextField(blank=True, default='', null=True),
        ),
    ]