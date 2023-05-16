from django.db import models

class CourseCategory(models.Model):
    name = models.CharField(max_length=100)
    image=models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    

    def __str__(self):
        return self.name

class Courses(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    duration = models.CharField(max_length=100)
    difficulty = models.CharField(max_length=100)
    skill_covered=models.CharField(max_length=100)
    prereqquisites=models.CharField(max_length=100)
    image=models.CharField(max_length=100)
    ratings = models.CharField(max_length=100)
    category = models.ForeignKey(CourseCategory, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class CourseLesson(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    video=models.CharField(max_length=100)
    transcript = models.TextField()
    course = models.ForeignKey(Courses, on_delete=models.CASCADE)
    progress = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
