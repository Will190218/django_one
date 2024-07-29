from django.urls import path
from galeria.views import index, penalti, calculator

urlpatterns = [
    path('', index),
    path('penalti/', penalti),
    path('calculator/', calculator)
]
