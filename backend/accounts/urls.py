from django.urls import path, include

from knox.views import LogoutView

from .views import RegisterAPIView, LoginAPIView, UserAPIView

urlpatterns = [
    path("", include("knox.urls")),  # LogoutView를 사용하기 위함
    path("user", UserAPIView.as_view()),
    path("login", LoginAPIView.as_view()),
    path("register", RegisterAPIView.as_view()),
    path("logout", LogoutView.as_view(), name="knox_logout"),
]