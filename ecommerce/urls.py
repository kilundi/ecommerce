from django.urls import path
from . import views


urlpatterns = [
 path('', views.Homepage, name='homepage'),
 path('shop/', views.Shop, name='shop'),
 path('signup/', views.SignUp, name='signUp'),
 path('login/', views.Login, name='login'),

]