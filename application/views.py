from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status        
from rest_framework.decorators import api_view
from .serializer import TaskSerializer
from .models    import *
# Create your views here.

@api_view(['GET', 'POST'])
def TaskView( request):
      
    if request.method == 'GET':
        tasks = TaskModel.objects.all()
        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data)

    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])

def TaskCreate(request):
    # contact = Contact.objects.all()
    serializer = TaskSerializer(data = request.data)
    
    if serializer.is_valid():
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    




@api_view(['GET', 'PUT', 'DELETE'])
def TaskHyperView(request, pk):
    try:
        task = TaskModel.objects.get(pk=pk)
    except TaskModel.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = TaskSerializer(task)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = TaskSerializer(task, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        task.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)