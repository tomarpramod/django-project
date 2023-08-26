from rest_framework import serializers
from .models import *

class CategorySerializers(serializers.HyperlinkedModelSerializer):
    class Meta:
        model  = Category
        fields = ('name','description')