from rest_framework import serializers
from .models import *

class UserInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model=UserInfo
        fields=['name','email','password']