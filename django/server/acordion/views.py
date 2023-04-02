
from rest_framework.generics import DestroyAPIView, CreateAPIView, ListAPIView, RetrieveAPIView, UpdateAPIView
from .serializer import  AcordionItemGetSerializer, AcordionItemUpdateSerializer, AcordionItemAddSerializer, AcordionItemDeleteSerializer
from .models import AcordionItem


class AcordionItemApiGet(RetrieveAPIView):
    queryset = AcordionItem.objects.all()
    serializer_class = AcordionItemGetSerializer


class AcordionItemApiUpdate(UpdateAPIView):
    queryset = AcordionItem.objects.all()
    serializer_class = AcordionItemUpdateSerializer


class AcordionItemApiGetAll(ListAPIView):
    queryset = AcordionItem.objects.all()
    serializer_class = AcordionItemGetSerializer


class AcordionItemApiPost(CreateAPIView):
    queryset = AcordionItem.objects.all()
    serializer_class = AcordionItemAddSerializer


class AcordionItemApiDelete(DestroyAPIView):
    queryset = AcordionItem.objects.all()
    serializer_class = AcordionItemDeleteSerializer
