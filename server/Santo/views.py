from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import DjangoModelPermissionsOrAnonReadOnly
from .models import User, Company , Office , Product ,Transfer,Action
from .serializers import UserSerializer, CompanySerializer , OfficeSerializer , ProductSerializer,TransferSerializer,ActionSerializer

# API view for User model
class UserView(APIView):
    permission_classes = [DjangoModelPermissionsOrAnonReadOnly]

    def get_queryset(self):
        return User.objects.all()

    def get(self, request, pk=None):
        if pk:
            user = self.get_queryset().filter(pk=pk).first()
            if not user:
                return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)
            serializer = UserSerializer(user)
            return Response(serializer.data)
        
        queryset = self.get_queryset()
        serializer = UserSerializer(queryset, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def put(self, request, pk):
        user = self.get_queryset().filter(pk=pk).first()
        if not user:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = UserSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk):
        user = self.get_queryset().filter(pk=pk).first()
        if not user:
            return Response({"error": "User not found"}, status=status.HTTP_404_NOT_FOUND)
        
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


# API view for Company model
class CompanyView(APIView):
    permission_classes = [DjangoModelPermissionsOrAnonReadOnly]

    def get_queryset(self):
        return Company.objects.all()
    
    def get(self, request, pk=None):
        if pk:
            company = self.get_queryset().filter(pk=pk).first()
            if not company:
                return Response({"error": "Company not found"}, status=status.HTTP_404_NOT_FOUND)
            serializer = CompanySerializer(company)
            return Response(serializer.data)
        
        queryset = self.get_queryset()
        serializer = CompanySerializer(queryset, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def put(self, request, pk):
        company = self.get_queryset().filter(pk=pk).first()
        if not company:
            return Response({"error": "Company not found"}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = CompanySerializer(company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk):
        company = self.get_queryset().filter(pk=pk).first()
        if not company:
            return Response({"error": "Company not found"}, status=status.HTTP_404_NOT_FOUND)
        
        company.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)




class OfficeView(APIView):
    permission_classes = [DjangoModelPermissionsOrAnonReadOnly]

    def get_queryset(self):
        return Office.objects.all()
    
    def get(self, request, pk=None):
        if pk:
            office = self.get_queryset().filter(pk=pk).first()
            if not office:
                return Response({"error": "Office not found"}, status=status.HTTP_404_NOT_FOUND)
            serializer = OfficeSerializer(office)
            return Response(serializer.data)
        
        queryset = self.get_queryset()
        serializer = OfficeSerializer(queryset, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = OfficeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def put(self, request, pk):
        office = self.get_queryset().filter(pk=pk).first()
        if not office:
            return Response({"error": "Office not found"}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = OfficeSerializer(office, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk):
        office = self.get_queryset().filter(pk=pk).first()
        if not office:
            return Response({"error": "Office not found"}, status=status.HTTP_404_NOT_FOUND)
        
        office.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



class ProductView(APIView):
    permission_classes = [DjangoModelPermissionsOrAnonReadOnly]

    def get_queryset(self):
        return Product.objects.all()
    
    def get(self, request, pk=None):
        if pk:
            product = self.get_queryset().filter(pk=pk).first()
            if not product:
                return Response({"error": "product not found"}, status=status.HTTP_404_NOT_FOUND)
            serializer = ProductSerializer(product)
            return Response(serializer.data)
        
        queryset = self.get_queryset()
        serializer = ProductSerializer(queryset, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def put(self, request, pk):
        product = self.get_queryset().filter(pk=pk).first()
        if not product:
            return Response({"error": "product not found"}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = ProductSerializer(product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk):
        product = self.get_queryset().filter(pk=pk).first()
        if not product:
            return Response({"error": "product not found"}, status=status.HTTP_404_NOT_FOUND)
        
        product.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)



class TransferView(APIView):
    permission_classes = [DjangoModelPermissionsOrAnonReadOnly]

    def get_queryset(self):
        return Transfer.objects.all()
    
    def get(self, request, pk=None):
        if pk:
            transfer = self.get_queryset().filter(pk=pk).first()
            if not transfer:
                return Response({"error": "transfer not found"}, status=status.HTTP_404_NOT_FOUND)
            serializer = TransferSerializer(transfer)
            return Response(serializer.data)
        
        queryset = self.get_queryset()
        serializer = TransferSerializer(queryset, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = TransferSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def put(self, request, pk):
        transfer = self.get_queryset().filter(pk=pk).first()
        if not transfer:
            return Response({"error": "transfer not found"}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = TransferSerializer(transfer, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk):
        transfer = self.get_queryset().filter(pk=pk).first()
        if not transfer:
            return Response({"error": "transfer not found"}, status=status.HTTP_404_NOT_FOUND)
        
        transfer.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class ActionView(APIView):
    permission_classes = [DjangoModelPermissionsOrAnonReadOnly]

    def get_queryset(self):
        return Action.objects.all()
    
    def get(self, request, pk=None):
        if pk:
            action = self.get_queryset().filter(pk=pk).first()
            if not action:
                return Response({"error": "action not found"}, status=status.HTTP_404_NOT_FOUND)
            serializer = ActionSerializer(action)
            return Response(serializer.data)
        
        queryset = self.get_queryset()
        serializer = ActionSerializer(queryset, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = ActionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def put(self, request, pk):
        action = self.get_queryset().filter(pk=pk).first()
        if not action:
            return Response({"error": "action not found"}, status=status.HTTP_404_NOT_FOUND)
        
        serializer = ActionSerializer(action, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    def delete(self, request, pk):
        transfer = self.get_queryset().filter(pk=pk).first()
        if not transfer:
            return Response({"error": "action not found"}, status=status.HTTP_404_NOT_FOUND)
        
        transfer.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
