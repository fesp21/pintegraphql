import graphene
from graphene import relay, AbstractType
from graphene_django import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField, GrapheneFilterSet

from server.pintegraphql.models import User, Image


class UserNode(DjangoObjectType):
    class Meta:
        model = User
        filter_fields = ['username', 'profile_picture']
        only_fields = ('username', 'profile_picture')
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
    single_user = relay.Node.Field(UserNode)
    all_users = DjangoFilterConnectionField(UserNode)

    image = relay.Node.Field(ImageNode)
    all_images = DjangoFilterConnectionField(ImageNode)


class UploadImage(relay.ClientIDMutation):
    class Input:
        url = graphene.String(required=True)
        description = graphene.String()

    image = graphene.Field(ImageNode)

    @classmethod
    def mutate_and_get_payload(cls, input, context, info):
        user = context.user
        image_url = input.get('url')
        image_description = input.get('description')
        try:
            image = Image(url=image_url, description=image_description)
        except Image.DoesNotExist:
            return
        else:
            if user.is_authenticated():
                image.user.add(user.user)
                image.save()
            return UploadImage(image=image)


class LikeImage(relay.ClientIDMutation):
    class Input:
        url = graphene.String(required=True)

    image = graphene.Field(ImageNode)

    @classmethod
    def mutate_and_get_payload(cls, input, context, info):
        user = context.user
        image_url = input.get('url')
        try:
            image = Image.objects.get(url=image_url)
        except Image.DoesNotExist:
            return
        else:
            if user.is_authenticated():
                image.liked_by.add(user.user)
                image.save()
            return UploadImage(image=image)
