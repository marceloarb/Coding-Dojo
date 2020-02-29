from django.shortcuts import render, redirect
from .models import Teacher
from django.contrib import messages
import bcrypt

def register(request):

    return render(request, 'register.html')