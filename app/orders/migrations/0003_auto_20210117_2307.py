# Generated by Django 3.1.4 on 2021-01-18 04:07

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_adress_district_province'),
        ('orders', '0002_auto_20210117_0011'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='address',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='adress', to='accounts.adress'),
        ),
    ]
