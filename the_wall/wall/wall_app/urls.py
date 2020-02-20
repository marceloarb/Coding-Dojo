from django.urls import path
from . import views	

urlpatterns = [
    path('', views.index),
    path('users', views.createUser),
    path('login', views.login),
    path('homepage', views.homepage),
    path('delete_session', views.delete_session),
    path('create_message',views.create_message),
    path('create_comment/<int:id>', views.create_comment)
]