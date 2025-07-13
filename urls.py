from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('category/', views.category_view, name='category'),
    path('category/<int:category_id>/subcategories/', views.subcategory_view, name='subcategory'),
    
]


    
