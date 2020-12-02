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
    password = serializers.CharField(max_length=20, min_length=4, write_only=True)
    token = serializers.CharField(max_length=255, read_only=True)

    class Meta:
        model = IndividualUser
        fields = "__all__"

    def create(self, validated_data):
        return IndividualUser.objects.create_individualuser(**validated_data)


# CorporateUser Register Serializer
class CorporateUserRegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(max_length=20, min_length=4, write_only=True)
    token = serializers.CharField(max_length=255, read_only=True)

    class Meta:
        model = CorporateUser
        fields = "__all__"
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        return CorporateUser.objects.create_corporateuser(**validated_data)


# Login Serializer
class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)
    token = serializers.CharField(max_length=255, read_only=True)

    def validate(self, data):
        email = data.get("email", None)
        password = data.get("password", None)
        user = authenticate(username=email, password=password)

        if user is None:
            raise serializers.ValidationError("A user with this email and password is not found.")
        try:
            individualUser = IndividualUser.objects.get(email=user.email)
        except IndividualUser.DoesNotExist:
            individualUser = None

        try:
            if individualUser is None:
                corporateUser = CorporateUser.objects.get(email=user.email)
        except CorporateUser.DoesNotExist:
            raise serializers.ValidationError("User with given email and password does not exists.")

        if not user.is_active:
            raise serializers.ValidationError("This user has been deactivated.")

        return {"email": user.email, "token": user.token}
