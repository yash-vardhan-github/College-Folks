# Generated by Django 3.2 on 2023-04-28 05:15

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0015_rename_cgpa_student_attendance'),
    ]

    operations = [
        migrations.CreateModel(
            name='Faculty',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('IDNumber', models.CharField(default='', max_length=9, null=True, validators=[django.core.validators.RegexValidator(message='Required 9 Digit ID Number', regex='^[0-9]{9}$')])),
                ('username', models.TextField(blank=True, unique=True)),
                ('name', models.CharField(max_length=100)),
                ('department', models.CharField(max_length=50)),
                ('phone_number', models.CharField(blank=True, max_length=15, null=True)),
                ('designation', models.CharField(blank=True, max_length=100, null=True)),
                ('joining_date', models.DateField(blank=True, null=True)),
                ('qualifications', models.TextField(blank=True, null=True)),
                ('research_interests', models.TextField(blank=True, null=True)),
                ('teaching_experience', models.TextField(blank=True, null=True)),
                ('professional_experience', models.TextField(blank=True, null=True)),
            ],
        ),
    ]
