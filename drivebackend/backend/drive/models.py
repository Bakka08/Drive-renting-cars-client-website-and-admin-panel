from django.db import models

class user(models.Model):
    fname = models.CharField(max_length=20)
    lname = models.CharField(max_length=20)
    email = models.CharField(max_length=50)
    telephone = models.CharField(max_length=15)
    password = models.CharField(max_length=20)
    is_admin = models.BooleanField(False)

class voiture(models.Model):
    mark = models.CharField(max_length=50)
    type = models.CharField(max_length=50)
    image = models.CharField(max_length=255)
    Mileage = models.IntegerField()
    Transmission = models.CharField(max_length=20)
    Seats = models.IntegerField()
    Luggage = models.IntegerField()
    Fuel = models.CharField(max_length=20)
    price = models.FloatField()

class reservation(models.Model):
    voiture = models.ForeignKey(voiture, on_delete=models.CASCADE)
    utilisateur = models.ForeignKey(user, on_delete=models.CASCADE)
    location_debut = models.CharField(max_length=50)
    location_fin = models.CharField(max_length=50)
    date_debut = models.DateField()
    date_fin = models.DateField()
    pikeup_date = models.CharField(max_length=50)
    


