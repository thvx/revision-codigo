from django.urls import path
from apps.products.views import ProductViewSet

urlpatterns = [
    path('', ProductViewSet.as_view({'get': 'get_all'}), name='products'),
    path('<int:product_id>', ProductViewSet.as_view({'get': 'get_by_id'}), name='products')
]
