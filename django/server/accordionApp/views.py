from rest_framework.generics import DestroyAPIView, CreateAPIView, ListAPIView, RetrieveAPIView, UpdateAPIView
from .serializer import AccordionItemGetSerializer, AccordionItemUpdateSerializer, AccordionItemAddSerializer, AccordionItemDeleteSerializer
from .models import AccordionItem


class AccordionItemApiGet(RetrieveAPIView):
    queryset = AccordionItem.objects.all()
    serializer_class = AccordionItemGetSerializer


class AccordionItemApiUpdate(UpdateAPIView):
    queryset = AccordionItem.objects.all()
    serializer_class = AccordionItemUpdateSerializer


class AccordionItemApiGetAll(ListAPIView):
    queryset = AccordionItem.objects.all()
    serializer_class = AccordionItemGetSerializer


class AccordionItemApiPost(CreateAPIView):
    queryset = AccordionItem.objects.all()
    serializer_class = AccordionItemAddSerializer


class AccordionItemApiDelete(DestroyAPIView):
    queryset = AccordionItem.objects.all()
    serializer_class = AccordionItemDeleteSerializer
