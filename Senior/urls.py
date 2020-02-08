from django.urls import path
from .import views

urlpatterns=[
    path('api/senior', views.LeadListCreate.as_view()),
]