from rest_framework import generics, permissions
from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer
from rest_framework.permissions import AllowAny
from knox.models import AuthToken


from .serializers import (
    IndividualUserRegisterSerializer,
    IndividualUserSerializer,
    CorporateUserRegisterSerializer,
    CorporateUserSerializer,
    LoginSerializer,
)

# IndividualUser Register API
class IndividualUserRegisterAPIView(generics.GenericAPIView):
    serializer_class = IndividualUserRegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(serializer.validated_data)


class CorporateUserRegisterAPIView(generics.GenericAPIView):
    serializer_class = CorporateUserRegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(serializer.validated_data)


# Login API
class LoginAPIView(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        return Response(serializer.validated_data)


# GEt User API
class UserAPIView(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = IndividualUserSerializer

    def get_object(self):
        return self.request.user