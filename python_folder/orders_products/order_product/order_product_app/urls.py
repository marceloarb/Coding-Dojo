from django.urls import path
from.import views
urlpatterns = [
    path('', views.index_product),
    path('add_product',views.add_product),
    path('display', views.display_product),
    path('display_order/<int:id>',views.display_myorders),
]