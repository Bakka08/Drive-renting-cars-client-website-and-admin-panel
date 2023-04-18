from django.shortcuts import render

from django.http import JsonResponse
from .models import user

def show_all_users(request):
    users = user.objects.all()
    data = {"users": []}
    for u in users:
        user_data = {"fname": u.fname, "lname": u.lname, "email": u.email, "telephone": u.telephone}
        data["users"].append(user_data)
    return JsonResponse(data)






def login(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        user_obj = user.objects.filter(email=email, password=password).first()

        if user_obj:
            # user found, return user object
            data = {
                'id': user_obj.id,
                'fname': user_obj.fname,
                'lname': user_obj.lname,
                'email': user_obj.email,
                'telephone': user_obj.telephone,
                'is_admin': user_obj.is_admin,
            }
            return JsonResponse(data)
        else:
            # user not found
            return JsonResponse({'error': 'Invalid email or password.'})
    else:
        # request method is not POST
        return JsonResponse({'error': 'Invalid request method.'})



