from django.http import JsonResponse
from .models import user
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import get_user_model

def show_all_users(request):
    users = user.objects.all()
   
    data = {"users": []}
    for u in users:
        user_data = {"id": u.id,"fname": u.fname, "lname": u.lname, "email": u.email, "telephone": u.telephone, "is_admin": u.is_admin}
        data["users"].append(user_data)
    return JsonResponse(data)



from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import user

@csrf_exempt
def login(request):
    if request.method == 'GET':
        email = request.GET.get('email', None)
        password = request.GET.get('password', None)

        if email and password:
            try:
                user_obj = user.objects.get(email=email, password=password)
                user_data = {
                    'id': user_obj.id,
                    'fname': user_obj.fname,
                    'lname': user_obj.lname,
                    'email': user_obj.email,
                    'telephone': user_obj.telephone,
                    'password': user_obj.password,
                    'is_admin': user_obj.is_admin,
                }
                return JsonResponse(user_data, status=200)
            except user.DoesNotExist:
                return JsonResponse({'message': 'User not found'}, status=404)

        return JsonResponse({'message': 'Email and password are required'}, status=400)

    return JsonResponse({'message': 'Only GET requests are allowed'}, status=405)




from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import user  

class signup(APIView):
    def post(self, request):
        
        fname = request.data.get('fname')
        lname = request.data.get('lname')
        email = request.data.get('email')
        telephone = request.data.get('telephone')
        password = request.data.get('password')
        is_admin = request.data.get('is_admin', False)

        
        new_user = user(
            fname=fname,
            lname=lname,
            email=email,
            telephone=telephone,
            password=password,
            is_admin=is_admin
        )

        
        new_user.save()

        
        return Response({'message': 'User created successfully'}, status=status.HTTP_201_CREATED)


from django.http import JsonResponse
from .models import voiture, reservation
from datetime import datetime

def search(request):
    date1 = request.GET.get('date1').strip()
    date2 = request.GET.get('date2').strip()

    date1 = datetime.strptime(date1, '%Y-%m-%d').date()
    date2 = datetime.strptime(date2, '%Y-%m-%d').date()

    cars = voiture.objects.all()
    reservations = reservation.objects.all()

    
    valid_reservations = [r for r in reservations if date2 >= r.date_debut and date1 <= r.date_fin]

    available_cars = []
    for car in cars:
        car_has_reservation = any(r.voiture.id == car.id for r in valid_reservations)
        if not car_has_reservation:
            available_cars.append({
                'id': car.id,
                'mark': car.mark,
                'type': car.type,
                'image': car.image,
                'Mileage': car.Mileage,
                'Transmission': car.Transmission,
                'Seats': car.Seats,
                'Luggage': car.Luggage,
                'Fuel': car.Fuel,
                'price': car.price
            })

    data = {'cars': available_cars}

    return JsonResponse(data)


from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import user

@api_view(['POST'])
def update(request, user_id):
    
    user_obj = get_object_or_404(user, pk=user_id)

    user_obj.fname = request.data.get('fname', user_obj.fname)
    user_obj.lname = request.data.get('lname', user_obj.lname)
    user_obj.email = request.data.get('email', user_obj.email)
    user_obj.telephone = request.data.get('telephone', user_obj.telephone)
    user_obj.password = request.data.get('password', user_obj.password)
    

    
    user_obj.save()

    
    return Response({'message': 'User updated successfully.'})



from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import voiture

@csrf_exempt
def car_list(request):
    if request.method == 'GET':
        cars = voiture.objects.all()
        data = []
        for car in cars:
            item = {
                'id': car.id,
                'mark': car.mark,
                'type': car.type,
                'image': car.image,
                'Mileage': car.Mileage,
                'Transmission': car.Transmission,
                'Seats': car.Seats,
                'Luggage': car.Luggage,
                'Fuel': car.Fuel,
                'price': car.price
            }
            data.append(item)
        return JsonResponse(data, safe=False)


from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import voiture

@csrf_exempt
def update_car(request, car_id):
    car = get_object_or_404(voiture, pk=car_id)

    # update the car object based on request data
    car.mark = request.POST.get('mark', car.mark)
    car.type = request.POST.get('type', car.type)
    car.image = request.POST.get('image', car.image)
    car.Mileage = request.POST.get('Mileage', car.Mileage)
    car.Transmission = request.POST.get('Transmission', car.Transmission)
    car.Seats = request.POST.get('Seats', car.Seats)
    car.Luggage = request.POST.get('Luggage', car.Luggage)
    car.Fuel = request.POST.get('Fuel', car.Fuel)
    car.price = request.POST.get('price', car.price)

    car.save()

    # return updated car object as JSON response
    data = {
        'id': car.id,
        'mark': car.mark,
        'type': car.type,
        'image': car.image,
        'Mileage': car.Mileage,
        'Transmission': car.Transmission,
        'Seats': car.Seats,
        'Luggage': car.Luggage,
        'Fuel': car.Fuel,
        'price': car.price
    }
    return JsonResponse(data)


from django.shortcuts import get_object_or_404
from django.http import JsonResponse
from .models import voiture
@csrf_exempt
def deletecar(request, car_id):
    car = get_object_or_404(voiture, pk=car_id)
    car.delete()
    data = {'message': 'Car deleted successfully!'}
    return JsonResponse(data)


from django.http import JsonResponse
from .models import reservation

def reservation_list(request):
    reservations = reservation.objects.select_related('voiture', 'utilisateur').all()
    data = []
    for r in reservations:
        reservation_data = {
            'id': r.id,
            'voiture': {
                'mark': r.voiture.mark,
                'type': r.voiture.type,
                'image': r.voiture.image,
                'mileage': r.voiture.Mileage,
                'transmission': r.voiture.Transmission,
                'seats': r.voiture.Seats,
                'luggage': r.voiture.Luggage,
                'fuel': r.voiture.Fuel,
                'price': r.voiture.price
            },
            'utilisateur': {
                'fname': r.utilisateur.fname,
                'lname': r.utilisateur.lname,
                'email': r.utilisateur.email,
                'telephone': r.utilisateur.telephone
            },
            'location_debut': r.location_debut,
            'location_fin': r.location_fin,
            'date_debut': r.date_debut,
            'date_fin': r.date_fin,
            'pikeup_date': r.pikeup_date,
            'status': r.status
        }
        data.append(reservation_data)
    return JsonResponse({'reservations': data})

import json
from django.http import JsonResponse
from .models import voiture
@csrf_exempt
def import_data(request):
    filepath = 'c:/Users/Yagami/Desktop/drive/Database Cars/data.json'

    with open(filepath) as f:
        data = json.load(f)

    for item in data:
        v = voiture.objects.create(
            mark=item['nom'],
            type="",
            image=item['image'],
            Mileage=10000,
            Transmission=item['Manuelle'],
            Seats=int(item['nbr_places'].split()[0]),
            Luggage=int(item['nbr_bagage'].split()[0]),
            Fuel="petrol",
            price=float(item['prix']),
        )

    return JsonResponse({'message': 'Data added successfully.'})