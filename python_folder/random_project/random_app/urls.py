from django.urls import path     
from.import views
urlpatterns = [
    path('',views.index),
    path('redi',views.redi),
    path('reset',views.reset),
    path('resetb',views.reset),
]