from django.db import models


class Dojo(models.Model):
    name = models.TextField()
    city = models.TextField()
    state = models.TextField()
    desc = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Nija(models.Model):
    first_name = models.TextField()
    last_name = models.TextField()
    dojo = models.ForeignKey(Dojo, related_name='ninjas', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

# Create your models here.
