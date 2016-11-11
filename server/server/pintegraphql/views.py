from django.contrib.auth.decorators import login_required
from django.shortcuts import render, HttpResponse

@login_required
def home(request):
    return render(request, 'pintegraphql/home.html')


def facebook(request):
    print(request)
    return HttpResponse('example response')