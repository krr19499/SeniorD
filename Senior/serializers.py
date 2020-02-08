from rest_framework import serializers
from .models import Users

class LeadSerializer (serializers.ModelSerializer):
    class Meta:
        model= Users
        fields= ('id','username','password','email','university','major')