from rest_framework import serializers
from .models import TaskModel

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = TaskModel
        fields = ('id', 'name_of_task', 'done', 'date_created', 'task', 'date_ended')