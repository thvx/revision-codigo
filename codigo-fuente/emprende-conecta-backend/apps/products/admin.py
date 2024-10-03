from django.contrib import admin
from apps.products.models import Product, ProductCategory, ProductTag

# Register your models here.
admin.site.register(Product)
admin.site.register(ProductCategory)
admin.site.register(ProductTag)
