from django.shortcuts import render

def index(request):
	return render(request, 'dashboard/index.html', {})

def video(request):
	return render(request, 'dashboard/video.html', {})

def menu(request):
	return render(request, 'dashboard/menu.html', {})

# Create your views here.
