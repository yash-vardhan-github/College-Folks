# Generated by Django 3.2.7 on 2021-11-14 09:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_rename_excelfiles_files'),
    ]

    operations = [
        migrations.CreateModel(
            name='Syllabus',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Branch', models.CharField(max_length=20, null=True, unique=True)),
                ('Content', models.FileField(upload_to='files/')),
            ],
        ),
        migrations.DeleteModel(
            name='Files',
        ),
    ]