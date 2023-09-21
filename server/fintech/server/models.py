from django.db import models

class Transaction(models.Model):
    merchant = models.CharField(max_length=100)
    value = models.CharField(max_length=20)
    
class Budget(models.Model):
    value = models.CharField(max_length=20)

