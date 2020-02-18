from __future__ import unicode_literals
from django.db import models

class ShowManager(models.Manager):
    def basic_validator(self, requestPOST):
        errors = {}
        movies_with_name = Show.objects.filter(title=requestPOST['title'])
        if len(movies_with_name) > 0:
            errors['duplicate'] = 'Title already exist'
        if len(requestPOST['title'])<2:
            errors['name'] = "Title should be at least 2 characters"
        if len(requestPOST['network'])<3:
            errors['network'] = "At least 3 characters"
        if len(requestPOST['date'])<10:
            errors['date'] = "Must contain 10 characters"
        if len(requestPOST['desc'])<10:
            errors['desc'] = "Must contain 10 characters at least"
        return errors

class Show(models.Model):
    title = models.TextField()
    network = models.TextField()
    date = models.TextField()
    desc = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = ShowManager()

# Create your models here.
