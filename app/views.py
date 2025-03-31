from django.shortcuts import render
from django.http import HttpResponse
from django.core.mail import send_mail
from django.conf import settings
from app.models import *

def test(request):
    return HttpResponse('Test')

def nav(request):
    return render ( request, 'nav.html')

def rdmotiv(request):
    return render (request,'index.html')


def wrap_jobs (request):
    return render (request, 'wrap_jobs.html')

def serpaint_protection_films (request):
    return render (request, 'paint_protection_films.html')

def other_services (request):
    return render (request, 'other_services.html')

def insurance_claims (request):
    return render (request, 'insurance_claims.html')

def detailing_and_interior_cleaning (request):
    return render (request, 'detailing_and_interior_cleaning.html')

def ceramic_graphene_coatings (request):
    return render (request, 'ceramic_graphene_coatings.html')

def body_shop_denting_painting (request):
    return render (request, 'body_shop_denting_painting.html')

def service (request):
    return render (request, 'service.html')


def paint_protection_films (request):
    return render (request, 'paint_protection_films.html')


