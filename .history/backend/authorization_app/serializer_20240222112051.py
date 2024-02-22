from rest_framework import serializers
from .models import *

class UserInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model=RegisterUser
        fields=['name','email','password']

    def validate(self,data):
        email=data.get('email')
        password=data.get('password')