from django.urls import path
from.import views
urlpatterns = [
    path('',views.index_user),
    path('user_process',views.process_user),
    path('product',views.index_add_product),
    path('add_product',views.process_product),
]