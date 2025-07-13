from django.contrib import admin
from .models import Category, SubCategory

class SubCategoryInline(admin.TabularInline):
    model = SubCategory
    extra = 1

class CategoryAdmin(admin.ModelAdmin):
    inlines = [SubCategoryInline]



admin.site.register(Category)
admin.site.register(SubCategory)