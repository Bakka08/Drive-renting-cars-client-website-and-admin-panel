from django.contrib import admin
from django.urls import path
from drive.views import login
from drive.views import show_all_users

urlpatterns = [
      path('admin/', admin.site.urls),
       path('login/<str:email>/<str:password>/', login, name='login'),
      path('users/', show_all_users, name='show_all_users'),
]




