from server.pintegraphql.models import User, Image

fede = User()
fede.nickname = 'fede'
fede.profile = 'I am Fede'
fede.photo = 'fede_photo_url'
fede.save()

mati = User()
mati.nickname = 'mati'
mati.profile = 'I am Mati'
mati.photo = 'mati_photo_url'
mati.save()

img1 = Image()
img1.url = 'url1'
img1.user = fede
img1.description = 'img1 description'
img1.save()

img2 = Image()
img2.url = 'url2'
img2.user = mati
img2.description = 'img2 description'
img2.save()
