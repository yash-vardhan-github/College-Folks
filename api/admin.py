from django.contrib import admin
from .models import Student,StoredSessions,Syllabus,Faculty
class FacultyAdmin(admin.ModelAdmin):
    readonly_fields = ('username',)
admin.site.register(Student)
admin.site.register(StoredSessions)
admin.site.register(Syllabus)
admin.site.register(Faculty,FacultyAdmin)
# Register your models here.