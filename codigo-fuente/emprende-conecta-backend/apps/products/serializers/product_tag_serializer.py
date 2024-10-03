from rest_framework import serializers
from apps.products.models import ProductTag


class ProductTagSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductTag
        fields = '__all__'