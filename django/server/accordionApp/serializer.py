from rest_framework import serializers
from .models import AccordionItem


class AccordionItemAddSerializer(serializers.ModelSerializer):
    class Meta:
        model = AccordionItem
        fields = '__all__'


class AccordionItemUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = AccordionItem
        fields = '__all__'


class AccordionItemGetSerializer(serializers.ModelSerializer):
    class Meta:
        model = AccordionItem
        fields = '__all__'


class AccordionItemDeleteSerializer(serializers.ModelSerializer):
    class Meta:
        model = AccordionItem
        fields = '__all__'
