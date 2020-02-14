from django.shortcuts import render,redirect
from .models import Author,Book


def index_book(request):
    context = {
        'books' : Book.objects.all()
    }
    return render(request, 'index_book.html', context)

def create_book(request):
    if request.method == 'POST':
        Book.objects.create(
            title = request.POST['title'],
            desc = request.POST['desc']
        )
    return redirect('/authors')

def index_author(request):
    context = {
        'authors':Author.objects.all()
    }
    return render(request, 'index_author.html', context)

def create_author(request):
    if request.method == 'POST':
        Author.objects.create(
            first_name = request.POST['first_name'],
            last_name = request.POST['last_name'],
            notes = request.POST['notes'],
        )
    return redirect('/')

def index_book_id(request,id):
    context = {
        'books':Book.objects.get(id=id),
        'authors':Author.objects.all()
    }
    return render(request, 'index_book_id.html', context)


def index_author_id(request,id):
    context = {
        'authors':Author.objects.get(id=id),
        'books':Book.objects.all()
    }
    return render(request, 'index_author_id.html',context)


def books_has_authors(request,id):
    book = Book.objects.get(id=id)
    author = Author.objects.get(id=request.POST['author_name'])
    book.authors.add(author)
    

    return redirect('/display/'+str(id))

def author_has_books(request,id):
    author = Author.objects.get(id=id)
    book = Book.objects.get(id=request.POST['book_id'])
    author.books.add(book)



    return redirect('/display_author/'+ str(id) )




# Create your views here.
