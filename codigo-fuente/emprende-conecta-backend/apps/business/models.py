from django.db import models
from django.core.validators import MinLengthValidator, RegexValidator
from django.core.exceptions import ValidationError
from django.contrib.auth.hashers import make_password

# Agregar registros "Emprendedor" y "Vendedor"
class TipoPersona(models.Model):
    nombre = models.CharField(max_length=20)

    def __str__(self):
        return f"{self.nombre}"

    class Meta:
        db_table = 'tipo_persona'


class Persona(models.Model):
    dni = models.CharField(max_length=20, null=True, validators=[RegexValidator(regex=r'^\d{8}$', message="El DNI debe tener 8 dígitos")])
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100, null=True, blank=True)
    email = models.EmailField(unique=True)
    email_recuperacion = models.EmailField(unique=True, null=True)
    password = models.CharField(max_length=128, null=True)
    telefono = models.CharField(max_length=20, blank=True, null=True,validators=[RegexValidator(regex=r'^\d{9}$', message="El teléfono debe tener 9 dígitos")])
    direccion = models.TextField(blank=True, null=True)
    tipo = models.ForeignKey(TipoPersona, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.nombre} {self.apellido}"

    class Meta:
        db_table = 'persona'

    def clean(self):
        if self.email == self.email_recuperacion:
            raise ValidationError("El email de recuperación no puede ser igual al email principal.")
        
    def save(self, *args, **kwargs):
        if self.password and not self.password.startswith('pbkdf2_sha256'):
            self.password = make_password(self.password)
        super().save(*args, **kwargs)    

class CategoriaEmprendimiento(models.Model):
    nombre = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.nombre}"

    class Meta:
        db_table = 'categoria_emprendimiento'


class Emprendimiento(models.Model):
    nombre_emprendimiento = models.CharField(max_length=200, null=True)
    categoria = models.ForeignKey(CategoriaEmprendimiento, on_delete=models.CASCADE)
    correo = models.EmailField()
    ubicacion = models.TextField()
    presentacion = models.TextField(null=True)
    telefono_contacto = models.CharField(max_length=20, null=True)
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100, null=True)
    password = models.CharField(max_length=128, validators=[MinLengthValidator(8)], null=True)
    telefono_personal = models.CharField(max_length=20, null=True)

    def __str__(self):
        return self.nombre

    class Meta:
        db_table = 'emprendimiento'

    def save(self, *args, **kwargs):
        if self.password and not self.password.startswith('pbkdf2_sha256'):
            self.password = make_password(self.password)
        super().save(*args, **kwargs)