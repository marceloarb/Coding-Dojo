from django.shortcuts import render,redirect
from .models import Genre,Movie

def index_movie(request):
    context = {
        'movies':Movie.objects.all()
    }

    return render(request, 'index_movie.html',context)


def index_genre(request):
    context = {
        'genres': Genre.objects.all()
    }

    return render(request, 'index_genre.html',context)


def add_movie(request):
    if request.method == 'POST':
        Movie.objects.create(
            title = request.POST['title'],
            desc = request.POST['desc'],
        )
    return redirect('/')

def add_genre(request):
    if request.method == 'POST':
        Genre.objects.create(
            name = request.POST['name'],
        )
    return redirect('/genre')

def genre_has_movies(request,id):
    context = {
        'genre': Genre.objects.get(id=id),
        'movies': Movie.objects.all(),
        
    }

    return render(request,'genre_has_movies.html',context)

def genre_add_movies(request,id):
    genre = Genre.objects.get(id=id)
    movie = Movie.objects.get(id=request.POST['movie_title'])
    genre.movies.add(movie)


    return redirect('/send_genre/'+str(id))

def send_movie(request,id):
    context = {
        'movie': Movie.objects.get(id=id),
        'genres': Genre.objects.all()
    }

    return render(request, 'movie_has_genre.html',context)


def movie_has_genre(request,id):
    movie = Movie.objects.get(id=id)
    genre = Genre.objects.get(id=request.POST['genre_id'])
    movie.genres.add(genre)

    return redirect('/send_movie/'+str(id))


