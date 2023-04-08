from django.urls import path

from .views import AccordionItemApiPost, AccordionItemApiGet, AccordionItemApiGetAll, AccordionItemApiDelete, AccordionItemApiUpdate

urlpatterns = [
    path('post', AccordionItemApiPost.as_view()),
    path('get/<int:pk>', AccordionItemApiGet.as_view()),
    path('get_all', AccordionItemApiGetAll.as_view()),
    path('delete/<int:pk>', AccordionItemApiDelete.as_view()),
    path('update/<int:pk>', AccordionItemApiUpdate.as_view()),
]
