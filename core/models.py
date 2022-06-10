from django.db import models
from django.core.validators import RegexValidator

# Create your models here.

# TABLA CUENTA
# class Cuenta(models.Model):
#     usuario = models.CharField(primary_key=True, max_length=20, verbose_name='Usuario')
#     nombre = models.CharField(max_length=64, blank=False, verbose_name='Nombre')
#     apellido = models.CharField(max_length=64, blank=False, verbose_name='Apellido')
#     correo = models.CharField(max_length=100, blank=False, verbose_name='Correo')
#     password = models.CharField(max_length=50, blank=False, verbose_name='Contraseña')

#     def __str__(self):
#         return self.usuario



class Soporte(models.Model):
    opciones_soporte = [
        [0, "Sugerencia"],
        [1, "Problema"],
        [2, "Comentario"],
        [3, "Otro"]
    ]
    nombre = models.CharField(max_length=64, verbose_name='Nombre')
    correo = models.EmailField()
    tipo_consulta = models.IntegerField(choices=opciones_soporte)
    mensaje = models.TextField()

    def __str__(self):
        return self.nombre

class Reporte(models.Model):

    nombre = models.CharField(max_length=64, verbose_name='Nombre', blank=True, null=True)
    correo = models.EmailField()
    juego = models.CharField(max_length=70)
    tipo_reporte = models.CharField(max_length=150)
    usuario_reportado = models.CharField(max_length=100)
    Evidencia = models.TextField()

    def __str__(self):
        return self.nombre
