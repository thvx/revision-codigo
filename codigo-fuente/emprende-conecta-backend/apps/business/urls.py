from rest_framework import routers
from apps.business import views
from django.urls import path, include
from apps.business.views import LoginView

router = routers.DefaultRouter()
router.register(r'persona', views.PersonaViews, 'persona')
router.register(r'tipo', views.TipoPersonaViews, 'tipo')
router.register(r'categoria', views.CategoriaEmprendimientoViews, 'categoria')
router.register(r'emprendimiento', views.EmprendimientoViews, 'emprendimiento')

urlpatterns = [
    path('persona/', include(router.urls)),
    path('login/', LoginView.as_view(), name='login')
]