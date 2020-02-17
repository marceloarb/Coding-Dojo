from django.shortcuts import render,redirect
from .models import User,Order,Product

def index_user(request):

    return render(request, 'index_user.html')

def process_user(request):
    if request.method == 'POST':
        User.objects.create(
            name = request.POST['name'],
            email = request.POST['email'],
        )

    return redirect('/')


def index_add_product(request):

    return render(request,'index_add_product.html')

def process_product(request):
    if request.method == 'POST':
        Product.objects.create(
            name = request.POST['title'],
            desc = request.POST['description']
        )

    return redirect('/product')



# Create your views here.
