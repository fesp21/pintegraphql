from django.conf.urls import url, include
from django.contrib import admin
from django.contrib.auth import views as auth_views
from graphene_django.views import GraphQLView

from server.pintegraphql import views as core_views

urlpatterns = [
    url(r'^$', core_views.home, name='home'),
    url(r'^graphql', GraphQLView.as_view(graphiql=True)),
    url(r'^login/$', auth_views.login, name='login'),
    url(r'^logout/$', auth_views.logout, name='logout'),
    url(r'^oauth/', include('social.apps.django_app.urls', namespace='social')),
    url(r'^admin/', admin.site.urls),
]
