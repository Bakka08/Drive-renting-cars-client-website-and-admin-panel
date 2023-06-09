# Generated by Django 4.2 on 2023-05-05 14:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='user',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fname', models.CharField(max_length=20)),
                ('lname', models.CharField(max_length=20)),
                ('email', models.CharField(max_length=50)),
                ('telephone', models.CharField(max_length=15)),
                ('password', models.CharField(max_length=20)),
                ('is_admin', models.BooleanField(verbose_name=False)),
                ('banned', models.BooleanField(verbose_name=False)),
            ],
        ),
        migrations.CreateModel(
            name='voiture',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('mark', models.CharField(max_length=50)),
                ('type', models.CharField(max_length=50)),
                ('image', models.CharField(max_length=255)),
                ('Mileage', models.IntegerField()),
                ('Transmission', models.CharField(max_length=20)),
                ('Seats', models.IntegerField()),
                ('Luggage', models.IntegerField()),
                ('Fuel', models.CharField(max_length=20)),
                ('price', models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name='reservation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('location_debut', models.CharField(max_length=50)),
                ('location_fin', models.CharField(max_length=50)),
                ('date_debut', models.DateField()),
                ('date_fin', models.DateField()),
                ('pikeup_date', models.CharField(max_length=50)),
                ('status', models.CharField(max_length=20)),
                ('utilisateur', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='drive.user')),
                ('voiture', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='drive.voiture')),
            ],
        ),
    ]
