"""
URL configuration for rdmotiv project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from app.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('service/',service,name='service'),
    path('body_shop_denting_painting/',body_shop_denting_painting,name='body_shop_denting_painting'),
    path('ceramic_graphene_coatings/',ceramic_graphene_coatings,name='ceramic_graphene_coatings'),
    path('detailing_and_interior_cleaning/',detailing_and_interior_cleaning,name='detailing_and_interior_cleaning'),
    path('insurance_claims/',insurance_claims,name='insurance_claims'),
    path('other_services/',other_services,name='other_services'),
    path('serpaint_protection_films/',serpaint_protection_films,name='serpaint_protection_films'),
    path('wrap_jobs/',wrap_jobs,name='wrap_jobs'),
    path('rdmotiv/',rdmotiv,name='rdmotiv'),
    path('',rdmotiv,name='rdmotiv'),
    path('paint_protection_films/',paint_protection_films,name='paint_protection_films'),
    path('test/',test,name='test'),
]
