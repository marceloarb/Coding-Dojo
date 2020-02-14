from django.shortcuts import render,redirect
from .models import Teacher,Student


def index(request):
    context={
        'all_teacher':Teacher.objects.all()
    }
    return render(request,'index.html',context)

def create_teacher(request):
    if request.method == 'POST':
        Teacher.objects.create(
            name = request.POST['first_name'],
            age = request.POST['age']
        )
    return redirect('/')

def create_student(request):
    if request.method == 'POST':
        Student.objects.create(
            name = request.POST['first_name'],
            catchphrase = request.POST['catch'],
            teacher = Teacher.objects.get(id=request.POST['teacher_name']),


        )
    return redirect('/')
# Create your views here.
