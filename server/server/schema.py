import graphene
from graphene_django.debug import DjangoDebug

import server.pintegraphql.schema
from server.pintegraphql.schema import UploadImage, LikeImage


class Query(server.pintegraphql.schema.Query, graphene.ObjectType):
    # This class will inherit from multiple Queries
    # as we begin to add more apps to our project
    debug = graphene.Field(DjangoDebug, name='__debug')


class MyMutations(graphene.ObjectType):
    upload_image = UploadImage.Field()
    like_image = LikeImage.Field()

schema = graphene.Schema(query=Query, mutation=MyMutations)
