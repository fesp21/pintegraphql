from django.contrib.auth.decorators import login_required
from django.shortcuts import render, HttpResponse
from graphene_django.views import GraphQLView
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator


@login_required
def home(request):
    return render(request, 'pintegraphql/home.html')


def spa(request):
    return render(request, 'pintegraphql/index.html')


def facebook(request):
    print(request)
    return HttpResponse('example response')


@method_decorator(csrf_exempt, name='dispatch')
class MyGraphQLView(GraphQLView):
    pass
