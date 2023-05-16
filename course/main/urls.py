from django.urls import path
from . import views

urlpatterns = [
    path('hello/', views.hello, name='hello'),
    path('catogeries/', views.CourseCategoryView.as_view()),
    path('catogeries/<int:pk>', views.CourseCategoryCrud.as_view()),

    path('course/', views.CourseView.as_view()),
    path('course/<int:pk>', views.CourseCrud.as_view()),

    path('lesson/', views.LessonView.as_view()),
    path('lesson/<int:pk>', views.LessonCrud.as_view()),
]


