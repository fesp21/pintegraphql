from django.db import models
from django.contrib.auth.models import User


# inherits from base django User, social-login uses
# username, email, is_authenticated, is_active from the base class
class User(User):
    profile_picture = models.URLField(max_length=256, null=True, blank=True)


class Image(models.Model):
    url = models.URLField(max_length=256, unique=True)
    user = models.ForeignKey(User, on_delete=models.PROTECT, related_name="uploaded_images")
    description = models.TextField(null=True, blank=True)
    liked_by = models.ManyToManyField(User, related_name="liked_images", null=True, blank=True)
