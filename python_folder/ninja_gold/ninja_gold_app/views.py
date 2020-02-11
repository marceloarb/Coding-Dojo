from django.shortcuts import render,redirect
import random



def index(request):
    return render(request, 'index.html')
# Create your views here.
def process_money(request):
    if request.method == 'POST':
        if request.POST['building'] == 'farm':
            request.session['gold'] += random.randint(-200,400)
        if request.POST['building'] == 'house':
            request.session['gold'] += random.randint(-400,-200)
        if request.POST['building'] == 'poker':
            request.session['gold'] += random.randint(-1000,2000)
        if request.POST['building'] == 'casino':
            request.session['gold'] += random.randint(-1000,700)
    return redirect('/')

def wrong_route(request, route):
    return redirect('/')