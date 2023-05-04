from django.contrib import admin
from django.urls import path
from drive.views import show_all_users , login , signup ,search,update

urlpatterns = [
      path('users/', show_all_users, name='show_all_users'),
       path('login/', login, name='login'),
        path('signup/', signup.as_view(), name='signup'),
        path('search/', search, name='search'),
        path('update/<int:user_id>/', update, name='update'),
]




