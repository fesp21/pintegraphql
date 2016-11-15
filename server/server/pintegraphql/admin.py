from django.contrib import admin

# Register your models here.
from django.contrib import admin
from server.pintegraphql.models import User, Image


class UserAdmin(admin.ModelAdmin):
    pass


class ImageAdmin(admin.ModelAdmin):
    pass

admin.site.register(User, UserAdmin)
admin.site.register(Image, ImageAdmin)
