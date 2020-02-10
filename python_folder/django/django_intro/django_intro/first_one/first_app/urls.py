from django.urls import path     
from . import views
urlpatterns = [
    path('', views.index),
    path('second_route', views.second),
    path('third/<str:name>', views.hello),
    path('forth',views.template),
]