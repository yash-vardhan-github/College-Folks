from django.urls import path
from .views import StudentView,welcome,GetStudent,GetStudentBySession,LogoutStudentBySession,SessionsView,ChangePassword,SaveDetails,ResetPasswordSendMail,ResetPasswordOTPVerification,ResetPasswordChange,FetchSyllabus,GetFaculty,UpdateAttendance,UpdateResult

urlpatterns=[
    path('',welcome),
    path('getstudent',StudentView.as_view()),
    path('verifystudent',GetStudent.as_view()),
    path('sessionverify',GetStudentBySession.as_view()),
    path('logoutbysession',LogoutStudentBySession.as_view()),
    path('loginsessions',SessionsView.as_view()),
    path('changepassword',ChangePassword.as_view()),
    path('savedetails',SaveDetails.as_view()),
    path('resetpasswordsendmail',ResetPasswordSendMail.as_view()),
    path('resetpasswordotpverification',ResetPasswordOTPVerification.as_view()),
    path('resetpasswordchange',ResetPasswordChange.as_view()),
    path('fetchsyllabus',FetchSyllabus.as_view()),
    path('verifyfaculty',GetFaculty.as_view()),
    path('updateattendance',UpdateAttendance.as_view()),
    path('updateresult',UpdateResult.as_view()),
]

