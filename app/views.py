from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib import auth
from .models import C_profile, P_profile, Notice, Qna, Post, PostComment
from django.contrib.auth.decorators import login_required
from django.contrib.auth import login as django_login
from django.contrib.auth import authenticate as django_authenticate
from django.http import JsonResponse