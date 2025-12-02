from django.db import models

# Create your models here.
from django.db import models

class Rating(models.Model):
    name = models.CharField(max_length=100)
    score = models.IntegerField()

    def __str__(self):
        return f"{self.name} - {self.score}"
