# from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework import serializers

from .models import User, IndividualUser, CorporateUser

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
    email = serializers.EmailField(write_only=True)
    password = serializers.CharField(write_only=True)
    token = serializers.CharField(max_length=255, read_only=True)
    individualUser = None
    corporateUser = None

    def validate(self, data):
        email = data.get("email", None)
        password = data.get("password", None)
        user = authenticate(email=email, password=password)
        global individualUser, corporateUser

        if user is None:
            raise serializers.ValidationError("A user with this email and password is not found.")
        try:
            individualUser = IndividualUser.objects.get(email=user.email)
            if not individualUser.is_active:
                raise serializers.ValidationError("This user has been deactivated.")
            return {"email": individualUser.email, "token": individualUser.token}
        except IndividualUser.DoesNotExist:
            individualUser = None

        if individualUser is None:
            try:
                corporateUser = CorporateUser.objects.get(email=user.email)
                if not corporateUser.is_active:
                    raise serializers.ValidationError("This user has been deactivated.")
                return {"email": corporateUser.email, "token": corporateUser.token}
            except CorporateUser.DoesNotExist:
                raise serializers.ValidationError(
                    "User with given email and password does not exists."
                )

    def create(self, validated_data):
        if IndividualUser is None:
            return {"email": corporateUser.email, "token": corporateUser.token}
        return {"email": individualUser.email, "token": individualUser.token}
