# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2016-11-03 03:32
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pintegraphql', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='image',
            name='likes',
            field=models.ManyToManyField(related_name='likedImages', to='pintegraphql.User'),
        ),
    ]
