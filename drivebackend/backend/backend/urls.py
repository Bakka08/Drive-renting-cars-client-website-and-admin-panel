from django.contrib import admin
from django.urls import path
from drive.views import show_all_users , login , signup ,search,update,car_list,update_car
from drive.views import delete_car , reservation_list,import_data,update_reservation_status,ToggleBannedView,create_reservation
urlpatterns = [
      path('users/', show_all_users, name='show_all_users'),
      path('login/', login, name='login'),
      path('signup/', signup.as_view(), name='signup'),
      path('search/', search, name='search'),
      path('update/<int:user_id>/', update, name='update'),
      path('cars/', car_list, name='car-list'),
      path('updatecar/<int:car_id>/', update_car, name='update_car'),
      path('deletecar/<int:car_id>/', delete_car, name='delete_car'),
      path('reservations/', reservation_list, name='reservation-list'),
      path('import_data/', import_data, name='import_data'),
      path('update-reservation-status/', update_reservation_status, name='update_reservation_status'),
      path('users/<int:pk>/toggle_banned/', ToggleBannedView.as_view(), name='toggle_banned'),
      path('create_reservation/', create_reservation, name='create_reservation'),


]




