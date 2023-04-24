from django.contrib import admin
from django.urls import path
from drive.views import show_all_users , login , signup

urlpatterns = [
      path('admin/', admin.site.urls),
      path('users/', show_all_users, name='show_all_users'),
       path('login/', login, name='login'),
        path('signup/', signup.as_view(), name='signup'),
]




