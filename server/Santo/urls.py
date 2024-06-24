from django.urls import path
from .views import UserView , CompanyView,OfficeView,ProductView,TransferView,ActionView

urlpatterns = [
    path("",UserView.as_view(),name="user"),
    path('<int:pk>/', UserView.as_view(), name='user-detail'),
    path("company/",CompanyView.as_view(),name="company"),
    path('company/<int:pk>/', CompanyView.as_view(), name='company-detail'),
    path("company/office",OfficeView.as_view(),name="office"),
    path('company/office/<int:pk>/', OfficeView.as_view(), name='office-detail'),
    path("product",ProductView.as_view(),name="products"),
    path('product/<int:pk>', ProductView.as_view(), name='products-detail'),
    path("transfer",TransferView.as_view(),name="transfer"),
    path('transfer/<int:pk>', TransferView.as_view(), name='transfer-detail'),
    path("action",ActionView.as_view(),name="action"),
    path('action/<int:pk>', ActionView.as_view(), name='action-detail'),
    
    
]
