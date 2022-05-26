from django.urls import path
# from rest_framework_simplejwt.views import (
#     TokenObtainPairView,
#     TokenRefreshView,
# )
from rest_framework_jwt.views import (
    obtain_jwt_token,
    refresh_jwt_token
)
from .views import (
    # get_current_user,
    UserView,
    # DataView,d
    UserRegisterView,
)

app_name = "auth_api"

urlpatterns = [
    # path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    path('token/', obtain_jwt_token, name='access-token'),
    path('token/refresh/', refresh_jwt_token, name='refresh-token'),
    # path('current_user/', get_current_user),
    path('user/', UserView.as_view()),
    path('register/', UserRegisterView.as_view()),
    # path('data/', DataView.as_view()),
]
