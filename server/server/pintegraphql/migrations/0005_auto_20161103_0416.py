# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2016-11-03 04:16
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pintegraphql', '0004_auto_20161103_0358'),
    ]

    operations = [
        migrations.AlterField(
            model_name='image',
            name='likedBy',
            field=models.ManyToManyField(to='pintegraphql.User'),
        ),
    ]
