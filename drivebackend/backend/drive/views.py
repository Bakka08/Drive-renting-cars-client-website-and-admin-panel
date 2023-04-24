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




from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import user  

class signup(APIView):
    def post(self, request):
        # retrieve data from the request body
        fname = request.data.get('fname')
        lname = request.data.get('lname')
        email = request.data.get('email')
        telephone = request.data.get('telephone')
        password = request.data.get('password')
        is_admin = request.data.get('is_admin', False)

        # create a new User object
        new_user = user(
            fname=fname,
            lname=lname,
            email=email,
            telephone=telephone,
            password=password,
            is_admin=is_admin
        )

        # save the user object to the database
        new_user.save()

        # return a success response
        return Response({'message': 'User created successfully'}, status=status.HTTP_201_CREATED)


