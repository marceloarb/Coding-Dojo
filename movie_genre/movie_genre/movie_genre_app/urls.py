from django.urls import path
from.import views
urlpatterns = [
    path('', views.index_movie),
    path('genre', views.index_genre),
    path('add_movie', views.add_movie),
    path('add_genre', views.add_genre),
    path('send_genre/<int:id>', views.genre_has_movies),
    path('genre_has_movies/<int:id>', views.genre_add_movies),
    path('send_movie/<int:id>',views.send_movie),
    path('movie_has_genre/<int:id>',views.movie_has_genre),


]