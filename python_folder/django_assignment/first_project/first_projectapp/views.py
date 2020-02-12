from django.shortcuts import render, HttpResponse,redirect
from .models import Shoe
def index(request):
    context={
        'allshoes':Shoe.objects.all()
    }
    return render(request,'first_project.html',context)



def create(request):
    if request.method == 'POST':
        Shoe.objects.create(
            brand=request.POST['brand'],
            size=request.POST['size'],
            style=request.POST['style'],

        )
    return redirect('/')



def destroy(request,id):
    if request.method == 'POST':
        shoe_to_delete = Shoe.objects.get(id=id)
        shoe_to_delete.delete()
    return redirect('/')
    
        





# Create your views here.
