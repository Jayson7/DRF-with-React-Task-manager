
from django.urls import path
from .views import * 

urlpatterns = [
    path('',  TaskView),
    path('task/<int:pk>', TaskHyperView),
    path('create', TaskCreate),
    
]
            