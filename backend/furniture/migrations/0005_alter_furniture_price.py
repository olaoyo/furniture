# Generated by Django 4.1.6 on 2023-04-05 09:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('furniture', '0004_alter_furniture_price'),
    ]

    operations = [
        migrations.AlterField(
            model_name='furniture',
            name='price',
            field=models.PositiveIntegerField(blank=True, null=True),
        ),
    ]
