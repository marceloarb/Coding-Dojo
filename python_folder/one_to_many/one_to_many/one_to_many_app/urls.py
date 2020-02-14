from django.urls import path
from.import views
urlpatterns = [
    path('', views.index),
    path('process_teacher', views.create_teacher),
    path('process_student', views.create_student),
]