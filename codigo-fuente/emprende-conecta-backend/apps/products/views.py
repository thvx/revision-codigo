from rest_framework import viewsets
from apps.products.models import Product
from django.http import JsonResponse
from rest_framework import status
from rest_framework.decorators import action
from apps.products.serializers.product_serializer import ProductSerializer

# Create your views here.
class ProductViewSet(viewsets.ModelViewSet):
    @action(detail=False, methods=['get'])
    def get_all(self, request):
        try:
            products = Product.objects.all()
            serializer = ProductSerializer(products, many=True)
            return JsonResponse({'success': True, 'data': serializer.data}, status=status.HTTP_200_OK)
        except Exception as e:
            return JsonResponse({'success': False, 'error': e}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    @action(detail=False, methods=['get'])
    def get_by_id(self, request, product_id):
        try:
            product = Product.objects.get(id=product_id)
            print(list(product.product_tags.all().values()))
            serializer = ProductSerializer(product)
            return JsonResponse({'success': True, 'data': serializer.data}, status=status.HTTP_200_OK)
        except Exception as e:
            return JsonResponse({'success': False, 'error': e}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)