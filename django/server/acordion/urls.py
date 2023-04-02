from django.urls import path

from .views import AcordionItemApiPost, AcordionItemApiGet, AcordionItemApiGetAll, AcordionItemApiDelete, AcordionItemApiUpdate

urlpatterns = [
    path('post', AcordionItemApiPost.as_view()),
    path('get/<int:pk>', AcordionItemApiGet.as_view()),
    path('get_all', AcordionItemApiGetAll.as_view()),
    path('delete/<int:pk>', AcordionItemApiDelete.as_view()),
    path('update/<int:pk>', AcordionItemApiUpdate.as_view()),
]