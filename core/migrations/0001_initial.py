# Generated by Django 4.0.4 on 2022-06-10 23:16

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Reporte',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(blank=True, max_length=64, null=True, verbose_name='Nombre')),
                ('correo', models.EmailField(max_length=254)),
                ('juego', models.CharField(max_length=70)),
                ('tipo_reporte', models.CharField(max_length=150)),
                ('usuario_reportado', models.CharField(max_length=100)),
                ('Evidencia', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Soporte',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=64, verbose_name='Nombre')),
                ('correo', models.EmailField(max_length=254)),
                ('tipo_consulta', models.IntegerField(choices=[[0, 'Sugerencia'], [1, 'Problema'], [2, 'Comentario'], [3, 'Otro']])),
                ('mensaje', models.TextField()),
            ],
        ),
    ]
