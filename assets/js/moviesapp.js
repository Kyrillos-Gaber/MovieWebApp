var password;
var brithDate;



function check() {
    // event.preventDefault();
    var userwarn = document.getElementById("username");// 
    var password = document.getElementById("password").value;
    var waring = document.getElementById("warn");
    var usr = document.getElementById("username").value;
    var passwarn = document.getElementById("passwarn");

    var repeatPass = document.getElementById("val").value;
    console.log(repeatPass);
    if (password !== repeatPass) {

        waring.style.display = "block";
        waring.style.color = "red";
        event.preventDefault();
    }
    else {
        waring.style.display = "none";
    }
    if (password.length < 8) {
        event.preventDefault();

        passwarn.textContent = "password must be more than 8 characters";
        passwarn.style.display = "block";
        passwarn.style.color = "red";
        return passwarn
    }
    else {
        passwarn.style.display = "none";
    }

    // لو الباسوورد مفيهوش special character انا بقوله  
    if (password.includes("$") == false && password.includes("*") == false && password.includes("+") == false && password.includes("/") == false) {
        event.preventDefault();
        passwarn.textContent = " your password must be more complex"
        passwarn.style.display = "block";
        passwarn.style.color = "red";
    }

    if (typeof (usr) !== String) {
        userwarn.textContent = "username must be a string";
        userwarn.style.display = "block";
        userwarn.style.color = "red";
    }
    else if (usr == "") {
        userwarn.textContent = "username must be a should not be empty"
        // userwarn.style.display = "block";
        // userwarn.style.color = "red";
    }
    else if (usr.length < 3) {
        userwarn.textContent = "username must be a should not be empty"
    }
    else {
        userwarn.style.display = "block";
    }

}


function showPass() {

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
        document.getElementById("user").innerHTML = userName;
    }

}
function logOut() {
    document.cookie = `username=;expires=Mon, 1 Jan 2022 00:00:00 `
    document.cookie = `password=;expires=Mon, 1 Jan 2022 00:00:00 `


}
function userNam() {
    var userNameLocal = localStorage.getItem("userName:")
    var user = document.getElementById("user");
    user.textContent = userNameLocal;
}
userNam();
