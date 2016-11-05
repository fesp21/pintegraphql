from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect

@login_required
def home(request):
    return render(request, 'pintegraphql/home.html')


def redirect_to_spa(request):
    print(request)
    return redirect('http://localhost:3000/', permanent=True)

