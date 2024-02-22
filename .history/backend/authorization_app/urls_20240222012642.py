from django.urls import path, include
from .views import (
    RegisterUserView
)

urlpatterns = [
    path('register', RegisterUserView.as_view()),
    path('login', RegisterUserView.as_view())

]