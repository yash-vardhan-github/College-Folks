# Generated by Django 3.2 on 2023-04-28 04:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0014_auto_20211121_1928'),
    ]

    operations = [
        migrations.RenameField(
            model_name='student',
            old_name='CGPA',
            new_name='Attendance',
        ),
    ]