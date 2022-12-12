var password;

function check() {
    var password = document.getElementById("password").value;
    var waring = document.getElementById("warn");

    console.log(password)
    var repeatPass = document.getElementById("val").value;
    console.log(repeatPass);
    if (password !== repeatPass) {

        waring.style.display = "block";
        waring.style.color = "red";
    }
    else {
        waring.style.display = "none";
    }

}
function saveInfo() {
    var password = document.getElementById("password").value;
    var nam = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    localStorage.setItem("userName:", nam);
    localStorage.setItem("Password:", password);
    localStorage.setItem("Email:", email)
}
function loginVal() {
    var userName = localStorage.getItem("userName:")
    var pass = localStorage.getItem("Password:");
    var loginUser = document.getElementById("lgNuser").value;
    var loginPass = document.getElementById("login-Pass").value;
    if (loginUser !== userName && loginPass !== pass) {
        var notify = document.getElementById("noMatch");
        notify.style.display = "block";
        notify.style.color = "red";
        event.preventDefault();


    }
    else {

    }

}
