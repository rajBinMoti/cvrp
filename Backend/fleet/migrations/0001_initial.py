# Generated by Django 3.2.8 on 2022-01-08 22:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='City',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=32)),
                ('active', models.BooleanField(default=True)),
                ('remarks', models.CharField(blank=True, max_length=256)),
            ],
        ),
        migrations.CreateModel(
            name='Location',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=128)),
                ('longitude', models.DecimalField(blank=True, decimal_places=10, max_digits=21)),
                ('latitude', models.DecimalField(blank=True, decimal_places=10, max_digits=21)),
                ('remarks', models.CharField(blank=True, max_length=256)),
                ('active', models.BooleanField(default=True)),
                ('city', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='fleet.city')),
            ],
        ),
        migrations.CreateModel(
            name='Semester',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=32)),
                ('active', models.BooleanField(default=True)),
                ('current', models.BooleanField(default=True)),
                ('remarks', models.CharField(blank=True, max_length=256)),
            ],
        ),
        migrations.CreateModel(
            name='PickUpPoint',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('user_id', models.CharField(blank=True, max_length=32)),
                ('roll_no', models.CharField(blank=True, max_length=32)),
                ('location', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='fleet.location')),
                ('semester', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='fleet.semester')),
            ],
        ),
    ]