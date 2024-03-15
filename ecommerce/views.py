from django.db.models import Q
from django.contrib.auth import login
from django.shortcuts import render,redirect
from .forms import SignUpForm
from products.models import Product,Category

# Create your views here.

def Homepage(request):
    products = Product.objects.all()[0:8]
    return render(request, 'ecommerce/homepage.html', {'products': products})

def SignUp(request):

    if request.method == 'POST':
        form = SignUpForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('/')
    else:
        form = SignUpForm()

    return render(request, 'registration/signup.html', {'form': form})

def Login(request):
    return render(request, 'registration/login.html')

def Shop(request):
    categories = Category.objects.all()
    products = Product.objects.all()
    active_category = request.GET.get('category', '')

    query = request.GET.get('query', '')

    if query:
        products = products.filter(Q(name__icontains=query) | Q(description__icontains=query))

    if active_category:
        products = products.filter(category__slug=active_category)

    context={
        'products': products,
        'categories': categories,
        'active_category': active_category,

    }
    return render(request, 'ecommerce/shop.html', context)
