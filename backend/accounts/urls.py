from django.urls import path, include

from knox.views import LogoutView

from .views import (
    IndividualUserRegisterAPIView,
    CorporateUserRegisterAPIView,
    LoginAPIView,
    UserAPIView,
)

urlpatterns = [
    path("", include("knox.urls")),  # LogoutView를 사용하기 위함
    path("user", UserAPIView.as_view()),
    path("login", LoginAPIView.as_view()),
    path("p-register", IndividualUserRegisterAPIView.as_view()),
    path("c-register", CorporateUserRegisterAPIView.as_view()),
    path("logout", LogoutView.as_view(), name="knox_logout"),
]