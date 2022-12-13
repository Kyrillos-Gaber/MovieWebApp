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
        document.cookie = `username=${userName};expires=Mon, 1 Jan 2023 00:00:00 `
        document.cookie = `password=${pass};expires=Mon, 1 Jan 2023 00:00:00 `
        document.getElementById("user").innerHTML=userName;
    }

}
function logOut() {
    document.cookie = `username=;expires=Mon, 1 Jan 2022 00:00:00 `
    document.cookie = `password=;expires=Mon, 1 Jan 2022 00:00:00 `


}
