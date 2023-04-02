from rest_framework import serializers
from .models import AcordionItem


class AcordionItemAddSerializer(serializers.ModelSerializer):
    class Meta:
        model = AcordionItem
        fields = '__all__'


class AcordionItemUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = AcordionItem
        fields = '__all__'


class AcordionItemGetSerializer(serializers.ModelSerializer):
    class Meta:
        model = AcordionItem
        fields = '__all__'


class AcordionItemDeleteSerializer(serializers.ModelSerializer):
    class Meta:
        model = AcordionItem
        fields = '__all__'
