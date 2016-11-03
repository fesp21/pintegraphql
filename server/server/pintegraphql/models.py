from django.db import models


# Create your models here.
class User(models.Model):
    profile = models.CharField(max_length=64)
    nickname = models.CharField(max_length=64)
    photo = models.URLField(max_length=256)

    def toDictionary(self):
        return {
            'id': self.id,
            'nickname': self.nickname,
            'photo_url': self.photo,
            'images': [image.id for image in self.images.all()]
        }


class Image(models.Model):
    url = models.URLField(max_length=256)
    user = models.ForeignKey(User, on_delete=models.PROTECT, related_name="images")
    description = models.TextField()
    likes = models.ManyToManyField(User, related_name="likedImages")
