from django.shortcuts import render
from django.http import HttpResponse
import matplotlib.pyplot as plt
from io import BytesIO
import base64
# Create your views here.


def home(request):
    context = {
        'title': 'Welcome to My Website',
        'content': 'This is the homepage of my Django project.',
    }
    return render(request, 'index.html', context)


def about(request):
    return render(request, 'about.html')


