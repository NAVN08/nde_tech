from django.db import models

class Category(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='category/', blank=True, null=True)

    def __str__(self):
        return self.title

class SubCategory(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(default='No description')
    image = models.ImageField(upload_to='subcategory/', blank=True, null=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='subcategories')

    def __str__(self):
        return self.title


class Product(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='products/')
    part_number = models.CharField(max_length=100, default=0)
    availability = models.CharField(max_length=100, default='In Stock')
    subcategory = models.ForeignKey(SubCategory, on_delete=models.CASCADE, related_name='products')
   
    related_products = models.ManyToManyField('self', blank=True)

    def __str__(self):
        return self.title