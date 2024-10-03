from rest_framework import serializers
from apps.products.models import Product
from apps.products.serializers.product_tag_serializer import ProductTagSerializer
from apps.products.serializers.product_category_serializer import ProductCategorySerializer


class ProductSerializer(serializers.ModelSerializer):
    product_tags = ProductTagSerializer(many=True)
    product_category = ProductCategorySerializer()

    class Meta:
        model = Product
        fields = '__all__'
