from django.urls import path
from .views import *

urlpatterns = [
    path('', index, name="index"),
    path('quienes-somos/', quienes_somos, name="quienes_somos"),
    path('contacto/', contacto, name="contacto"),
    path('soporte/', soporte, name="soporte"),
    path('login/', login, name="login"),
    path('register/', register, name="register"),
    path('account/', account, name="account"),
    path('editaccount/<id>/', editaccount, name="editaccount"),
    path('deleteaccount/<id>/', deleteaccount, name="deleteaccount")
]