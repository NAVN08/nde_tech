from django.shortcuts import render, get_object_or_404
from .models import Category, SubCategory

def index(request):
    return render(request, 'home/index.html')

def category_view(request):
    categories = Category.objects.all()
    return render(request, 'home/category.html', {'categories': categories})

def subcategory_view(request, category_id):
    category = get_object_or_404(Category, id=category_id)
    subcategories = category.subcategories.all()
    return render(request, 'home/sub_category.html', {
        'category': category,
        'subcategories': subcategories
    })
