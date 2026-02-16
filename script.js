document.addEventListener("DOMContentLoaded",function(){
    const studentSubmit=document.getElementById("studentlogin")
    studentSubmit.addEventListener("click",function () {
        window.location.href = "studentlogin.html"; 
    });
    const teacherSubmit=document.getElementById("teacherlogin")
    teacherSubmit.addEventListener("click",function () {
        window.location.href = "teacherlogin.html";
    });
    const adminSubmit=document.getElementById("adminlogin")
    adminSubmit.addEventListener("click",function () {
        window.location.href = "adminlogin.html";
    });

})