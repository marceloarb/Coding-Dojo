from django.db import models
import re
import datetime
class TeacherManager(models.Manager):
    def basic_validator(self, requestPOST):
        errors = {}
        print(requestPOST['date'])
        if datetime.datetime.now().strftime('%Y-%m-%d') <= requestPOST['date']:
            errors['date'] = "Date needs to be past date "
        if len(requestPOST['name']) < 3:
            errors['name'] = "Name is too short"
        users_with_name = Teacher.objects.filter(name=requestPOST['name'])
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

class Teacher(models.Model):
    name = models.CharField(max_length=255)
    password = models.TextField()
    email = models.CharField(max_length=255)
    date = models.DateField(default=datetime.date.today)
    token = models.CharField(max_length = 12)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    objects = TeacherManager()

class Student(models.Model):
    name = models.CharField(max_length=255)
    password = models.TextField()
    email = models.CharField(max_length=255)
    date = models.DateField(default=datetime.date.today)
    teachers = models.ManyToManyField(Teacher, related_name = 'students')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Assignment(models.Model):
    assignment = models.TextField()
    grades = models.IntegerField()
    notes = models.CharField(max_length=255)
    answer = models.TextField()
    teachers = models.ManyToManyField(Teacher, related_name = 'assignments')
    students = models.ManyToManyField(Student, related_name = 'assignments')
    graded = models.BooleanField()
    submitted = models.BooleanField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Course(models.Model):
    number = models.IntegerField()
    subject = models.TextField()
    students = models.ManyToManyField(Student, related_name = 'courses')
    teacher = models.OneToOneField(Teacher, on_delete=models.CASCADE,primary_key=True)


