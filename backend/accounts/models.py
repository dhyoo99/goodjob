# from django.db import models
# from django.contrib.auth.models import User
# from django.db.models.signals import post_save
# from django.dispatch import receiver

#  # 기업회원 프로필
# class C_profile(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE)
#     nickname = models.CharField(max_length=20, blank=True)
#     # 유저 기본적으로 생성되긴 하지만 우리가 필요한 것들이 뭐가 있을지?

#     @receiver(post_save, sender=User)
#     def create_user_profile(sender, instance, created, **kwargs):
#         if created:
#             C_profile.objects.create(user=instance)

#     @receiver(post_save, sender=User)
#     def save_user_profile(sender, instance, **kwargs):
#         instance.profile.save()

# # 개인회원 프로필
# class P_profile(models.Model):
#     user = models.OneToOneField(User, on_delete=models.CASCADE)
#     nickname = models.CharField(max_length=20, blank=True)
#     # 유저 기본적으로 생성되긴 하지만 우리가 필요한 것들이 뭐가 있을지?

#     @receiver(post_save, sender=User)
#     def create_user_profile(sender, instance, created, **kwargs):
#         if created:
#             P_profile.objects.create(user=instance)