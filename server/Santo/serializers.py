from rest_framework import serializers
from .models import User , Company, Office, Product ,Transfer , Action

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','company', 'position', 'firstname', 'lastname', 'number', 'email', 'token', 'username', 'password']

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company 
        fields = ["id",'name','company_id']

class OfficeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Office
        fields = ["id", 'company', 'office_id']

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'company', 'product_category', 'product_name', 'rating',
                  'use_time', 'used_time', 'quantity', 'location', 'explanation', 'picture']

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['company'] = instance.company.name if instance.company else None
        representation['location'] = instance.location.office_id if instance.location else None
        return representation


class TransferSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transfer
        fields = ['id', 'company', 'position', 'name', 'transfer_date',
                  'command_Id', 'command_date', 'command_pic', 'product_pic']

class ActionSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Action
        fields = "__all__"