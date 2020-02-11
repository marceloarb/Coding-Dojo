from django.shortcuts import render,redirect
from django.utils.crypto import get_random_string

def index(request):
    if 'num' in request.session:
        request.session['num']+=1
    else:
        request.session['num']=1
    
    # unique_id = get_random_string(length=14)
    return render(request,'index.html')

def redi(request):
    request.session['randomwords'] = get_random_string(length=14)
    return redirect('/')
    

def reset(request):
    if 'num' in request.session:
        del request.session['num']
        del request.session['randomwords']
    return redirect('/')




# Create your views here.
