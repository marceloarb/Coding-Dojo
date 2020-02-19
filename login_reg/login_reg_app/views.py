from django.shortcuts import render, redirect
from .models import User
from django.contrib import messages
import bcrypt

def index(request):
    return render(request, "index.html")

def createUser(request):
    if request.method == "POST":
        errors = User.objects.basic_validator(request.POST)
        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request, value)
        else:
            print("User's password entered was " + request.POST['password'])
            hashed_pw = bcrypt.hashpw(request.POST['password'].encode(), bcrypt.gensalt()).decode() 
            user = User.objects.create(name=request.POST['name'],email=request.POST['email'], password=hashed_pw, date=request.POST['date'])
            print("User's password has been changed to " + user.password)
            
    return redirect('/')

def login(request):
    if request.method == "POST":
        users_with_name = User.objects.filter(email=request.POST['email'])
        if users_with_name:
            user = users_with_name[0]
            if bcrypt.checkpw(request.POST['password'].encode(), user.password.encode()):#This is checking if password are equal to the creation password
                request.session['user_id'] = user.id #IMPORTANT!!! this is how we know this user id is logged in
                return redirect('/homepage')
            else:
                print("Password didn't match")
                messages.error(request, "Incorrect name or password")
        else:
            print("Name not found")
            messages.error(request, "Incorrect name or password")
    return redirect('/')

def delete_session(request):
    request.session.clear()
    return redirect('/')

def homepage(request):
    if 'user_id' not in request.session :
        return redirect('/')
    else:
        return render(request, "homepage.html")