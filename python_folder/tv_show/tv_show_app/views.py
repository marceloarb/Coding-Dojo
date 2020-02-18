from django.shortcuts import render,redirect
from .models import Show
from django.contrib import messages

def index(request):

    return render(request, 'index.html')


def add_shows(request):
    if request.method == 'POST':
        errors = Show.objects.basic_validator(request.POST)

        if len(errors)>0:
            for key,value in errors.items():
                messages.error(request, value)
            return redirect('/')
        else:
            show = Show.objects.create(
                title = request.POST['title'],
                network = request.POST['network'],
                date = request.POST['date'],
                desc = request.POST['desc'],
            )

            return redirect('/show/'+ str(show.id))

def display_show(request):
    context = {
        'shows': Show.objects.all()
    }

    return render(request, 'display_shows.html',context)

def show(request,id):
    context = {
        'show': Show.objects.get(id=id)    
        }

    return render(request, 'show.html', context)

def display_edit(request,id):
    context = {
        'show': Show.objects.get(id=id)
    }

    return render(request,'edit_show.html',context)

def edit_show(request):
    if request.method == 'POST':
        errors = Show.objects.basic_validator(request.POST)

        if len(errors)>0:
            for key,value in errors.items():
                messages.error(request, value)
            return redirect('/')
        else:
            Show.objects.update(
                title = request.POST['title'],
                network = request.POST['network'],
                date = request.POST['date'],
                desc = request.POST['desc'],
            )

            return redirect('/edit_show')

def destroy(request,id):
    delete = Show.objects.get(id=id)
    delete.delete()

    return redirect('/display_show') 

# Create your views here.
