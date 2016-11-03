from graphene import relay, AbstractType
from graphene_django import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField

from server.pintegraphql.models import User, Image


class UserNode(DjangoObjectType):
    class Meta:
        model = User
        filter_fields = ['nickname', 'profile', 'photo']

        interfaces = (relay.Node, )


class ImageNode(DjangoObjectType):
    class Meta:
        model = Image
        filter_fields = {
            'url': ['exact', 'icontains', 'istartswith'],
            'user': ['exact'],
            'description': ['exact'],
        }
        interfaces = (relay.Node, )



class Query(AbstractType):
    user = relay.Node.Field(UserNode)
    all_users = DjangoFilterConnectionField(UserNode)

    image = relay.Node.Field(ImageNode)
    all_images = DjangoFilterConnectionField(ImageNode)