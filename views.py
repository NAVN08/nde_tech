from django.shortcuts import render, get_object_or_404
from .models import Category, SubCategory , Product

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


def product_view(request,subcategory_id):
    subcategory = get_object_or_404(SubCategory, id=subcategory_id)
    products= subcategory.products.all()
    return render(request, 'home/product.html', {
        'subcategory': subcategory,
        'products': products
    })

def product_detail(request, pk):
    product = get_object_or_404(Product, pk=pk)
    subcategory = product.subcategory
    category = subcategory.category
    related = product.related_products.all()

    return render(request, 'home/product_detail.html', {
        'product': product,
        'related_products': related,
        
    })

    
  