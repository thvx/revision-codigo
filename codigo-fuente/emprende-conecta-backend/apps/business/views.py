from django.shortcuts import render
from django.contrib.auth.hashers import check_password
from rest_framework import viewsets
from apps.business.serializer import PersonaSerializer, TipoPersonaSerializer, CategoriaEmprendimientoSerializer, EmprendimientoSerializer
from apps.business.models import Persona, TipoPersona, CategoriaEmprendimiento, Emprendimiento
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status


# Create your views here.
class PersonaViews(viewsets.ModelViewSet):
    serializer_class = PersonaSerializer
    queryset = Persona.objects.all()

class TipoPersonaViews(viewsets.ModelViewSet):
    serializer_class = TipoPersonaSerializer
    queryset = TipoPersona.objects.all()

class CategoriaEmprendimientoViews(viewsets.ModelViewSet):
    serializer_class = CategoriaEmprendimientoSerializer
    queryset = CategoriaEmprendimiento.objects.all()

class EmprendimientoViews(viewsets.ModelViewSet):
    serializer_class = EmprendimientoSerializer
    queryset = Emprendimiento.objects.all()

class LoginView(APIView):
    def post(self, request, *args, **kwargs):
        email = request.data.get('email')
        password = request.data.get('password')
        try:
            user = Persona.objects.get(email=email)
            if check_password(password, user.password):
                return Response({"mensaje": "Login exitoso (Comprador)"}, status=status.HTTP_200_OK)
            else:
                return Response({"error": "Contraseña incorrecta (Comprador)"}, status=status.HTTP_400_BAD_REQUEST)
        except Persona.DoesNotExist:
            pass
        
        # Intentar encontrar al usuario en la tabla Emprendimiento
        try:
            user = Emprendimiento.objects.get(correo=email)
            if check_password(password, user.password):
                return Response({"mensaje": "Login exitoso (Vendedor)"}, status=status.HTTP_200_OK)
            else:
                return Response({"error": "Contraseña incorrecta (Vendedor)"}, status=status.HTTP_400_BAD_REQUEST)
        except Emprendimiento.DoesNotExist:
            pass
        
        # Si no se encuentra en ninguna tabla
        return Response({"error": "Email no encontrado"}, status=status.HTTP_404_NOT_FOUND)