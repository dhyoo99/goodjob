from django.db import models
from django.utils import timezone
from django.db.models.signals import post_save
from django.dispatch import receiver 
from django.contrib.auth.models import User #user authentication

#Profile class 안에 기업 / 개인 나눌지 , 지금처럼 C_profile, P_profile로 나눌지..

 # 기업회원 프로필
class C_profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    nickname = models.CharField(max_length=20, blank=True)
    # 유저 기본적으로 생성되긴 하지만 우리가 필요한 것들이 뭐가 있을지?

    @receiver(post_save, sender=User)
    def create_user_profile(sender, instance, created, **kwargs):  
        if created:
            C_profile.objects.create(user=instance)

    @receiver(post_save, sender=User)
    def save_user_profile(sender, instance, **kwargs):  
        instance.profile.save()

# 개인회원 프로필
class P_profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    nickname = models.CharField(max_length=20, blank=True)
    # 유저 기본적으로 생성되긴 하지만 우리가 필요한 것들이 뭐가 있을지?

    @receiver(post_save, sender=User)
    def create_user_profile(sender, instance, created, **kwargs):  
        if created:
            P_profile.objects.create(user=instance)

    @receiver(post_save, sender=User)
    def save_user_profile(sender, instance, **kwargs):  
        instance.profile.save()

# 기업회원이 올리는 전체 공지
class Notice(models.Model):
    # id는 자동 추가
    title = models.CharField(max_length=256)
    content = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(blank=True, null=True)

    def update_date(self): # 나중에 수정할 때 사용
        self.updated_at = timezone.now()
        self.save()

    def __str__(self):
        return self.title

    def get(self, request): # 기업의 위치정보
        longitude = float(request.GET.get('longitude', None))
        latitude  = float(request.GET.get('latitude', None))
        position  = (latitude,longitude)

# 공고등록란이 기업회원에게만 뜨도록

# 개인 회원들이 올리는 QNA
class Qna(models.Model):
    p_user = models.OneToOneField(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.owner.username

    @receiver(post_save, sender=User)
    def create_user_qna(sender, instance, created, **kwargs):
        if created:
            Qna.objects.create(user=instance)

    @receiver(post_save, sender=User)
    def save_user_qna(sender, instance, **kwargs):
        instance.Qna.save()

# 커뮤니티에 올라오는 글
class Post(models.Model):
    # id는 자동 추가
    title = models.CharField(max_length=256)
    content = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(blank=True, null=True)
    author = models.ForeignKey(User, null=True, on_delete= models.CASCADE)

    def update_date(self): # 나중에 수정할 때 사용
        self.updated_at = timezone.now()
        self.save()

    def __str__(self):
        return self.title

# 커뮤니티 댓글
class PostComment(models.Model):
    content = models.TextField()
    feed = models.ForeignKey(Post, on_delete=models.CASCADE)
    created_at = models.DateTimeField(default=timezone.now)
    author = models.ForeignKey(User, null=True, on_delete= models.CASCADE)

    def __str__(self):
        return str(self.id)
