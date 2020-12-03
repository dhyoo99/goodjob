from django.contrib.auth import authenticate
from rest_framework import generics, permissions, status
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
        user = serializer.save()

        return Response(
            {
                "user": IndividualUserSerializer(user, context=self.get_serializer_context()).data,
                "token": serializer.data.get("token", None),
            },
            status=status.HTTP_201_CREATED,
        )


class CorporateUserRegisterAPIView(generics.GenericAPIView):
    serializer_class = CorporateUserRegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


# Login API
class LoginAPIView(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


# GEt User API
class UserAPIView(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = IndividualUserSerializer

    def get_object(self):
        return self.request.user