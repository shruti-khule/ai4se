from django.conf.urls import url
from django.urls import path, include
from .views import (
    UserInfoView
)

urlpatterns = [
    path('api', UserInfoView.as_view()),
]