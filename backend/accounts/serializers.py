# from django.contrib.auth.models import User
from django.contrib.auth.models import User
from django.contrib.auth import authenticate

from rest_framework import serializers

from .models import CorporateUser
from .models import IndividualUser

# email 중복되는지 검사 필요
User._meta.get_field("email")._unique = True


# IndividualUser Serializer
class IndividualUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = IndividualUser
        fields = "__all__"


# CorporateUser Serializer
class CorporateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CorporateUser
        fields = "__all__"


# IndividualUser Register Serializer
class IndividualUserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = IndividualUser
        fields = "__all__"
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        return IndividualUser.objects.create_user(**validated_data)


# CorporateUser Register Serializer
class CorporateUserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = CorporateUser
        fields = "__all__"
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        return CorporateUser.objects.create_user(**validated_data)


# Login Serializer
class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Incorrect Credentials")
