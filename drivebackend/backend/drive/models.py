from django.db import models

class user(models.Model):
    fname = models.CharField(max_length=20)
    lname = models.CharField(max_length=20)
    email = models.CharField(max_length=50)
    telephone = models.CharField(max_length=15)
    password = models.CharField(max_length=20)


class admin(models.Model):
    code = models.CharField(max_length=10)
    email = models.CharField(max_length=50)
    password = models.CharField(max_length=20)


class voiture(models.Model):
    mark = models.CharField(max_length=50)
    type = models.CharField(max_length=50)
    image = models.CharField(max_length=255)
    Mileage = models.IntegerField()
    Transmission = models.CharField(max_length=20)
    Seats = models.IntegerField()
    Luggage = models.IntegerField()
    Fuel = models.CharField(max_length=20)
    Airconditions = models.BooleanField(False)
    ChildSeat = models.BooleanField(False)
    GeoPS = models.BooleanField(False)
    Luggage = models.BooleanField(False)
    Music= models.BooleanField(False)
    SeatBelt = models.BooleanField(False)
    SleepingBed = models.BooleanField(False)
    Water = models.BooleanField(False)
    Bluetooth = models.BooleanField(False)
    Onboardcomputer = models.BooleanField(False)
    Audioinput = models.BooleanField(False)
    LongTermTrips = models.BooleanField(False)
    CarKit = models.BooleanField(False)
    Remotecentrallocking = models.BooleanField(False)
    Climatecontrol = models.BooleanField(False)
    price = models.FloatField()

class reservation(models.Model):
    voiture = models.ForeignKey(voiture, on_delete=models.CASCADE)
    utilisateur = models.ForeignKey(user, on_delete=models.CASCADE)
    date_debut = models.DateField()
    date_fin = models.DateField()
    


