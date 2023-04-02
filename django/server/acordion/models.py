from django.db import models


class AcordionItem(models.Model):
    title = models.CharField(max_length=50, null=True)
    content = models.CharField(max_length=2500, null=True)