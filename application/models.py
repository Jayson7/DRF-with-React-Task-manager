from tabnanny import verbose
from django.db import models

# Create your models here.
class TaskModel(models.Model):
    name_of_task = models.CharField(max_length=200)
    done = models.BooleanField(default=False)
    date_created = models.DateTimeField(auto_now_add=True)
    task = models.TextField()
    date_ended = models.DateTimeField(null=True, blank=True)
    
    def __str__(self) -> str:
        return self.name_of_task
    
    class Meta:
        verbose_name_plural = "Tasks"

        