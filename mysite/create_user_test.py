# -*- coding: utf-8 -*-
import os
import django

from sys import platform
import sys

# sys.path.append('..')
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "mysite.settings")
# if platform == "linux":
#     sys.path.append('/home/oritec/FTE')
django.setup()

from django.contrib.auth.models import User

abspath = os.path.abspath(__file__)
dname = os.path.dirname(abspath)
os.chdir(dname)

usuario = {
  "nombre": "admin",
  "apellido": "Test",
  "empresa": "CypresEA",
  "nombreUsuario": "admin",
  "email": "admin@cyd.cl",
  "password": "admin1234",
  "passwordR": "admin1234",
  "proyectos": [],
  "perfil": 4,
  "username": "admin",
}

from django.contrib.auth.models import User;

User.objects.create_superuser('admin', 'admin@example.com', 'admin1234')

# def create_user():
#   # user_obj = User.objects.create_user(username=usuario['username'],
#   #                                               email=usuario['email'],
#   #                                               password=usuario['password'])
#   # user_obj.first_name =usuario['nombre']
#   # user_obj.last_name =usuario['apellido']
#   # user_obj.save()
#   print('create')

# if __name__ == '__main__':
#     try:
#       create_user()
#     except KeyboardInterrupt:
#       print('F')
#       sys.exit()
