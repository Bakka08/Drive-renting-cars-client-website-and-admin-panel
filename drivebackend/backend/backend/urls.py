from django.contrib import admin
from django.urls import path
from drive.views import show_all_users , login , signup ,search,update,car_list,update_car
from drive.views import deletecar , reservation_list,import_data
urlpatterns = [
      path('users/', show_all_users, name='show_all_users'),
      path('login/', login, name='login'),
      path('signup/', signup.as_view(), name='signup'),
      path('search/', search, name='search'),
      path('update/<int:user_id>/', update, name='update'),
      path('cars/', car_list, name='car-list'),
      path('updatecar/<int:car_id>/', update_car, name='update_car'),
      path('deletecar/<int:car_id>/', deletecar, name='delete_car'),
      path('reservations/', reservation_list, name='reservation-list'),
      path('import_data/', import_data, name='import_data'),
      
]




