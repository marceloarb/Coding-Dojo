from django.urls import path
from.import views
urlpatterns = [
    path('', views.index),
    path('process', views.process_money),
    path('<path:route>', views.wrong_route)
]