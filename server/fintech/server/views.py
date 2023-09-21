from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from . import models, serializers


class TransactionViewSet(APIView):
    def get(self, request, id=None):
        if id:
            item = models.Transaction.objects.get(id=id)
            serializer = serializers.TransactionSerializer(item)
            return Response(
                {"status": "success", "data": serializer.data},
                status=status.HTTP_202_ACCEPTED,
            )

        items = models.Transaction.objects.all()
        serializer = serializers.TransactionSerializer(items, many=True)
        return Response(
            {"status": "success", "data": serializer.data},
            status=status.HTTP_202_ACCEPTED,
        )

    def post(self, resquest):
        serializer = serializers.TransactionSerializer(data=resquest.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"status": "success", "data": serializer.data},
                status=status.HTTP_201_CREATED,
            )


class BudgetViewSet(APIView):
    def get(self, request, id=None):
        if id:
            item = models.Budget.objects.get(id=id)
            serializer = serializers.BudgetSerializer(item)
            return Response(
                {"status": "success", "data": serializer.data},
                status=status.HTTP_202_ACCEPTED,
            )

        items = models.Budget.objects.all()
        serializer = serializers.BudgetSerializer(items, many=True)
        return Response(
            {"status": "success", "data": serializer.data},
            status=status.HTTP_202_ACCEPTED,
        )

    def post(self, resquest):
        serializer = serializers.BudgetSerializer(data=resquest.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"status": "success", "data": serializer.data},
                status=status.HTTP_201_CREATED,
            )
