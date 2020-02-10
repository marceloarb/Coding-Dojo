from django.shortcuts import render, HttpResponse

def index(request):
    return HttpResponse("I have done a route in Django")

def second(request):
    return HttpResponse("second function")

def hello(request, name):
    return HttpResponse("Hello" + name)

def template(request):
    context = {
        "name": "Marcelo",
        "numbers": [2,4,6] 
    }
    return render(request, "index.html", context )
