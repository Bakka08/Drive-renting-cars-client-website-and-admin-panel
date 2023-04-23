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
        user_data = {"fname": u.fname, "lname": u.lname, "email": u.email, "telephone": u.telephone}
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
                    'fname': user_obj.fname,
                    'lname': user_obj.lname,
                    'email': user_obj.email,
                    'telephone': user_obj.telephone,
                    'is_admin': user_obj.is_admin,
                }
                return JsonResponse(user_data, status=200)
            except user.DoesNotExist:
                return JsonResponse({'message': 'User not found'}, status=404)

        return JsonResponse({'message': 'Email and password are required'}, status=400)

    return JsonResponse({'message': 'Only GET requests are allowed'}, status=405)





