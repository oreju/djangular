# Generated by Django 2.1 on 2018-08-05 15:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lt_car_plates', '0003_auto_20180805_1503'),
    ]

    operations = [
        migrations.AlterField(
            model_name='carplate',
            name='plate_number',
            field=models.CharField(max_length=10, unique=True),
        ),
    ]
