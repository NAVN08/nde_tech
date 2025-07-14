from django.contrib import admin
from .models import Category, SubCategory, Product

class SubCategoryInline(admin.TabularInline):
    model = SubCategory
    extra = 1

class CategoryAdmin(admin.ModelAdmin):
    inlines = [SubCategoryInline]

class ProductInline(admin.TabularInline):
    model = Product
    extra =1


# class SubCategoryAdmin(admin.ModelAdmin):
#     inlines = [ProductInline]


class ProductAdmin(admin.ModelAdmin):
    filter_horizontal = ('related_products',)

admin.site.register(Category)
admin.site.register(SubCategory)
admin.site.register(Product,ProductAdmin)