from django.urls import path
from .views import TransactionViewSet, BudgetViewSet

urlpatterns = [
    path("transactions/", TransactionViewSet.as_view()),
    path("transactions/<int:id>", TransactionViewSet.as_view()),
    path("budget/", BudgetViewSet.as_view()),
    path("budget/<int:id>", BudgetViewSet.as_view()),
]
