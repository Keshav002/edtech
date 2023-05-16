from rest_framework import serializers
from . import models

class CatogeriesSerializers(serializers.ModelSerializer):
    class Meta:
        model=models.CourseCategory
        fields=['id','name','image', 'created_at','updated_at']    

class CourseSerializers(serializers.ModelSerializer):
    class Meta:
        model=models.Courses
        fields=['id','name','description','duration','difficulty','skill_covered','prereqquisites','image','ratings','category','created_at','updated_at']

class CourseLessonSerializers(serializers.ModelSerializer):
    class Meta:
        model=models.CourseLesson
        fields=['id','name','description','video','transcript','course','progress','created_at','updated_at']