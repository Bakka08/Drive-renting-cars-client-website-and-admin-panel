from django.shortcuts import render

from django.http import JsonResponse
from .models import user
from .models import admin
from django.views.decorators.csrf import csrf_exempt

def show_all_users(request):
    users = user.objects.all()
    data = {"users": []}
    for u in users:
        user_data = {"fname": u.fname, "lname": u.lname, "email": u.email, "telephone": u.telephone}
        data["users"].append(user_data)
    return JsonResponse(data)





@csrf_exempt
def login(request, email, password):
    try:
        # Attempt to retrieve the user with the given email
        user_obj = user.objects.get(email=email)
    except user.DoesNotExist:
        # If the user doesn't exist, return an error response
        return JsonResponse({"success": False})

    # Check if the password is correct
    if user_obj.password == password:
        # If the password is correct, return a success response
        return JsonResponse({"success": True, })
    else:
        # If the password is incorrect, return an error response
        return JsonResponse({"success": False, })
    
@csrf_exempt
def adminlogin(request, email, password):
    try:
        # Attempt to retrieve the user with the given email
        admin_obj = admin.objects.get(email=email)
    except admin.DoesNotExist:
        # If the user doesn't exist, return an error response
        return JsonResponse({"success": False})

    # Check if the password is correct
    if admin_obj.password == password:
        # If the password is correct, return a success response
        return JsonResponse({"success": True, })
    else:
        # If the password is incorrect, return an error response
        return JsonResponse({"success": False, })