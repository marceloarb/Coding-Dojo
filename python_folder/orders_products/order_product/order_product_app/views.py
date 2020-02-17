from django.shortcuts import render,redirect
from .models import Order,Product


def index_product(request):

    return render(request,'index_product.html')

def add_product(request):
    if request.method == 'POST':
        Product.objects.create(
            name = request.POST['name'],
            desc = request.POST['desc'],
        )

    return redirect('/')

def display_product(request):
    context = {
        'products':Product.objects.all()
    }

    return render(request,'display_product.html',context)


def display_myorders(request,id):
    product = Product.objects.get(id=id)
    order = Order.objects.get(id=request.POST['order'])
    order.products.add(product)

    return render(request,'display_myorders.html/'+str(id))



# Create your views here.
