from django.db import models
import re
from datetime import date
import datetime

class UserManager(models.Manager):
    def basic_validator(self, requestPOST):
        errors = {}
        print(requestPOST['date'])
        if datetime.datetime.now().strftime('%Y-%m-%d') <= requestPOST['date']:
            errors['date'] = "Date needs to be past date "
        birth = datetime.datetime.now().strptime(requestPOST['date'],'%Y-%m-%d')
        today=date.today()
        if (birth.year + 12,birth.month, birth.day)>(today.year,today.month, today.day):
            errors['age'] = "you are too young"
        if len(requestPOST['name']) < 3:
            errors['name'] = "Name is too short"
        users_with_name = User.objects.filter(name=requestPOST['name'])
        if len(users_with_name) > 0:
            errors['duplicate'] = "Name already taken"
        if len(requestPOST['password']) < 8:
            errors['password'] = "Password is too short"
        if requestPOST['password'] != requestPOST['password_conf']:
            errors['no_match'] = "Password and Password Confirmation must match"
        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
        if not EMAIL_REGEX.match(requestPOST['email']):    # test whether a field matches the pattern            
            errors['email'] = "Invalid email address!"
        return errors

class User(models.Model):
    name = models.TextField()
    password = models.TextField()
    email = models.CharField(max_length=255)
    date = models.DateField(default=datetime.date.today)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = UserManager()
