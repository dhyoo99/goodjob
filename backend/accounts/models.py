from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.core.validators import MinLengthValidator


class UserManager(BaseUserManager):
    def get_by_natural_key(self, email):
        return self.get(email=email)


class IndividualUserManager(BaseUserManager):
    def create_user(
        self, first_name, last_name, email, username, birth_date, gender, agreement, password=None
    ):
        if email is None:
            raise TypeError("Users must have an email address.")
        Individualuser = IndividualUser(
            first_name=first_name,
            last_name=last_name,
            email=self.normalize_email(email),
            username=username,
            birth_date=birth_date,
            gender=gender,
            agreement=agreement,
        )
        Individualuser.set_password(password)
        Individualuser.save()
        return Individualuser


class CorporateUserManager(BaseUserManager):
    def create_user(
        self,
        first_name,
        last_name,
        email,
        username,
        company_registration_number,
        company_name,
        agreement,
        password=None,
    ):
        if email is None:
            raise TypeError("Users must have an email address.")
        Corporateuser = CorporateUser(
            first_name=first_name,
            last_name=last_name,
            email=self.normalize_email(email),
            username=username,
            company_registration_number=company_registration_number,
            company_name=company_name,
            agreement=agreement,
        )
        Corporateuser.set_password(password)
        Corporateuser.save()
        return Corporateuser


class User(AbstractBaseUser, PermissionsMixin):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(db_index=True, unique=True)
    username = models.CharField(max_length=50)
    password = models.CharField(validators=[MinLengthValidator(4)], max_length=20)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = [
        "first_name",
        "last_name",
    ]

    objects = UserManager()

    def get_full_name(self):
        return self.first_name + " " + self.last_name

    def get_short_name(self):
        return self.first_name

    def natural_key(self):
        return (self.first_name, self.last_name)

    def __str__(self):
        return self.email


# 개인회원
class IndividualUser(User, PermissionsMixin):
    birth_date = models.DateField()
    gender = models.CharField(max_length=10)
    agreement = models.BooleanField(null=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = [
        "first_name",
        "last_name",
        "username",
    ]

    objects = IndividualUserManager()

    def __str__(self):
        return self.username


class CorporateUser(User, PermissionsMixin):
    company_registration_number = models.IntegerField()
    company_name = models.CharField(max_length=100)
    agreement = models.BooleanField(null=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["first_name", "last_name", "company_registration_number", "company_name"]

    objects = CorporateUserManager()

    def __str__(self):
        return self.company_name


#  # 기업회원 프로필
# class Corporateprofile(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE)
#     nickname = models.CharField(max_length=20, blank=True)
#     # 유저 기본적으로 생성되긴 하지만 우리가 필요한 것들이 뭐가 있을지?

#     @receiver(post_save, sender=User)
#     def create_user_profile(sender, instance, created, **kwargs):
#         if created:
#             Corporateprofile.objects.create(user=instance)

#     @receiver(post_save, sender=User)
#     def save_user_profile(sender, instance, **kwargs):
#         instance.profile.save()

# # 개인회원 프로필
# class Individualprofile(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE)
#     birth_date = models.DateField()
#     gender = models.TextField()
#     agreement = models.BooleanField()
#     # 유저 기본적으로 생성되긴 하지만 우리가 필요한 것들이 뭐가 있을지?

#     @receiver(post_save, sender=User)
#     def create_user_profile(sender, instance, created, **kwargs):
#         if created:
#             Individualprofile.objects.create(user=instance)

#     @receiver(post_save, sender=User)
#     def save_user_profile(sender, instance, **kwargs):
#         instance.profile.save()