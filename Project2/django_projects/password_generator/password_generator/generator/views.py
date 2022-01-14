from django.shortcuts import render
from django.http import HttpResponse
import random #random library to generate random password everytime


# Create your views here.
#function to return home.html
def home(request):
    return render(request, 'generator/home.html')
#function to return about.html
def about(request):
    return render(request, 'generator/about.html')
#function to return password.html
def password(request):
    characters = list('abcdefghijklmnopqrstuvwxyz')

    #password function when the invoked
    if request.GET.get('uppercase'):
        characters.extend(list('ABCDEFGHIJKLMNOPQRSTUVWXYZ'))
    if request.GET.get('special'):
        characters.extend(list('!@#$%^&*()'))
    if request.GET.get('numbers'):
        characters.extend(list('0123456789'))

    length = int(request.GET.get('length',12))

    thepassword = ''
    for x in range(length):
        thepassword += random.choice(characters)

    #????
    return render(request, 'generator/password.html', {'password':thepassword})