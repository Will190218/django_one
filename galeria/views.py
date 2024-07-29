from django.shortcuts import render

# funcoes para rendereizar apos uma request
# caso for criar uma nova ir em urls.py e criar uma nova rota


def index(request):
    return render(request, 'index.html')


def calculator(request):
    return render(request, 'calculator.html')


def penalti(request):
    return render(request, '/penalti.html')
