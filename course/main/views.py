from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import CatogeriesSerializers,CourseSerializers,CourseLessonSerializers
from . import models
from rest_framework import generics
from django.http import JsonResponse,HttpResponse



# Create your views here.
from django.http import HttpResponse

def hello(request):
    return HttpResponse("Hello, world!")

class CourseCategoryView(generics.ListCreateAPIView):
    queryset= models.CourseCategory.objects.all()
    serializer_class= CatogeriesSerializers

class CourseCategoryCrud(generics.RetrieveUpdateDestroyAPIView):
    queryset= models.CourseCategory.objects.all()
    serializer_class= CatogeriesSerializers



class CourseView(generics.ListCreateAPIView):
    queryset= models.Courses.objects.all()
    serializer_class= CourseSerializers

class CourseCrud(generics.RetrieveUpdateDestroyAPIView):
    queryset= models.Courses.objects.all()
    serializer_class= CourseSerializers

    

class LessonView(generics.ListCreateAPIView):
    queryset= models.CourseLesson.objects.all()
    serializer_class= CourseLessonSerializers

class LessonCrud(generics.RetrieveUpdateDestroyAPIView):
    queryset= models.CourseLesson.objects.all()
    serializer_class= CourseLessonSerializers