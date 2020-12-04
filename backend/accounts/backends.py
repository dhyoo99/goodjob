import jwt
from django.conf import settings
from django.contrib.auth.backends import ModelBackend
from rest_framework import authentication, exceptions
from .models import IndividualUser, CorporateUser, User


class JWTUserAuthentication(authentication.BaseAuthentication):
    authentication_header_prefix = "Token"

    def authenticate(self, request):
        request.user = None
        auth_header = authentication.get_authorization_header(request).split()
        auth_header_prefix = self.authentication_header_prefix.lower()

        if not auth_header:
            return None

        # `auth_header` should be an array with two elements: 1) the name of
        # the authentication header (in this case, "Token") and 2) the JWT
        # that we should authenticate against.

        if len(auth_header) == 1:
            # Invalid token header. No credentials provided. Do not attempt to
            # authenticate.
            return None

        elif len(auth_header) > 2:
            # Invalid token header. The Token string should not contain spaces. Do
            # not attempt to authenticate.
            return None

        prefix = auth_header[0].decode("utf-8")
        token = auth_header[1].decode("utf-8")

        if prefix.lower() != auth_header_prefix:
            return None

        return self._authenticate_credentials(request, token)

    def _authenticate_credentials(self, request, token):
        try:
            payload = jwt.decode(token, settings.SECRET_KEY)

        except:
            msg = "Invalid authentication. Could not decode token."
            raise exceptions.AuthenticationFailed(msg)

        try:
            individualUser = IndividualUser.objects.get(pk=payload["id"])
            if not individualUser.is_active:
                msg = "This user has been deactivated."
                raise exceptions.AuthenticationFailed(msg)
            return (individualUser, token)
        except IndividualUser.DoesNotExist:
            msg = "No individual user matching this token was found."
            raise exceptions.AuthenticationFailed(msg)

        try:
            corporateUser = CorporateUser.objects.get(pk=payload["id"])
            if not corporateUser.is_active:
                msg = "This user has been deactivated."
                raise exceptions.AuthenticationFailed(msg)
            return (corporateUser, token)
        except CorporateUser.DoesNotExist:
            msg = "No user matching this token was found."
            raise exceptions.AuthenticationFailed(msg)