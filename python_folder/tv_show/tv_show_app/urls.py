from django.urls import path
from.import views
urlpatterns = [
    path('',views.index),
    path('add_shows',views.add_shows),
    path('display_show',views.display_show),
    path('show/<int:id>', views.show),
    path('display_edit/<int:id>', views.display_edit),
    path('edit_show/<int:id>', views.edit_show),
    path('destroy/<int:id>', views.destroy),
]
