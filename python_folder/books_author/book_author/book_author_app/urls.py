from django.urls import path
from.import views
urlpatterns = [
    path('',views.index_book),
    path('book',views.create_book),
    path('authors',views.index_author),
    path('author',views.create_author),
    path('display/<int:id>',views.index_book_id),
    path('display_author/<int:id>',views.index_author_id),
    path('show_author/<int:id>',views.books_has_authors),
    path('show_books/<int:id>',views.author_has_books),

]
