from rest_framework import serializers
from apps.business.models import Persona, TipoPersona, CategoriaEmprendimiento, Emprendimiento

class PersonaSerializer (serializers.ModelSerializer):
    class Meta:
        model = Persona
        fields = '__all__'

    def validate_password(self, value):
        if len(value) < 8:
            raise serializers.ValidationError("La contraseña debe tener al menos 8 caracteres.")
        return value

    def validate_email_recuperacion(self, value):
        if value == self.initial_data.get('email'):
            raise serializers.ValidationError("El email de recuperación no puede ser igual al email principal.")
        return value
    
    def validate_email(self, value):
        if Persona.objects.filter(email=value).exists():
            raise serializers.ValidationError("Este correo ya está registrado.")
        if Emprendimiento.objects.filter(correo=value).exists():
            raise serializers.ValidationError("Este correo ya está registrado en un emprendimiento.")
        return value

    def validate(self, data):
        if Persona.objects.filter(email=data.get('email_recuperacion')).exists():
            raise serializers.ValidationError("El email de recuperación ya está en uso como correo principal de otro usuario.")
        if Persona.objects.filter(dni=data.get('dni')).exists():
            raise serializers.ValidationError("El DNI ya está en uso por otro usuario.")
        return data

class TipoPersonaSerializer (serializers.ModelSerializer):
    class Meta:
        model = TipoPersona
        fields = '__all__'

class CategoriaEmprendimientoSerializer (serializers.ModelSerializer):
    class Meta:
        model = CategoriaEmprendimiento
        fields = '__all__'

class EmprendimientoSerializer (serializers.ModelSerializer):
    class Meta:
        model = Emprendimiento
        fields = '__all__'

    def validate_correo(self, value):
        if Persona.objects.filter(email=value).exists():
            raise serializers.ValidationError("Este correo ya está registrado en una persona.")
        if Emprendimiento.objects.filter(correo=value).exists():
            raise serializers.ValidationError("Este correo ya está registrado.")
        return value
    
    def validate_contacto(self, value):
        if not value.isdigit() or len(value) != 9:
            raise serializers.ValidationError("El contacto debe tener exactamente 9 dígitos.")
        return value

    def validate_telefono_personal(self, value):
        if not value.isdigit() or len(value) != 9:
            raise serializers.ValidationError("El teléfono personal debe tener exactamente 9 dígitos.")
        return value

    def validate(self, data):
        if data.get('contacto') == data.get('telefono_personal'):
            raise serializers.ValidationError("El contacto y el teléfono personal no pueden ser iguales.")
        return data