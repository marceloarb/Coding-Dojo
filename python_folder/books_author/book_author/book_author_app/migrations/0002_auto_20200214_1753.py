# Generated by Django 2.2 on 2020-02-14 17:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('book_author_app', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='author',
            field=models.ManyToManyField(related_name='books', to='book_author_app.Author'),
        ),
    ]