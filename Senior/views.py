from .models import Users
from  .serializers import LeadSerializer
from rest_framework import generics
# Create your views here.

class LeadListCreate(generics.ListCreateAPIView):
    queryset = Users.objects.all()
    serializer_class = LeadSerializer
