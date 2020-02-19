from django.db import models
import re
class MovieManager(models.Manager):
    def basic_validator(self, requestPOST):
        errors = {}
        if len(requestPOST['title']) < 3:
            errors['title'] = 'Name is too short'
        TITLE_REGEX = re.compile(r'^ [A-Za-z ]+$')
        if not TITLE_REGEX.match(requestPOST['title']):
            errors['title_regex'] = 'title must only have latters'
        movies_with_name = Movie.objects.filter(title=requestPOST['title'])
        if len(movies_with_name) > 0:
            errors['duplicate'] = 'Title already exist'
        if len(requestPOST['desc']) < 10:
            errors['desc'] = 'description is too short'
        return errors

class Genre(models.Model):
    name = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Movie(models.Model):
    title = models.TextField()
    desc = models.TextField()
    genres = models.ManyToManyField(Genre, related_name= "movies")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = MovieManager()
# Create your models here.
