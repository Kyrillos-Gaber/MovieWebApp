

// var birthDate = document.getElementById("d")

// 
var password = document.getElementById("password");
console.log(password)

/// password check
function passCheck() {


    var password = document.getElementById("password").value;
    var waring = document.getElementById("warn");
    
    var passwarn = document.getElementById("passwarn");
    var repeatPass = document.getElementById("val").value;
    console.log(repeatPass);
    if (password !== repeatPass) {
        event.preventDefault
        waring.style.display = "block";
        waring.style.color = "red";

    }
    else {
        waring.style.display = "none";
    }


    if (password.length < 8) {

        event.preventDefault
        passwarn.textContent = "password must be more than 8 characters";
        passwarn.style.display = "block";
        passwarn.style.color = "red";

    }


    // لو الباسوورد مفيهوش special character انا بقوله  
    else if (password.includes("$") == false && password.includes("*") == false && password.includes("+") == false && password.includes("/") == false) {
        event.preventDefault
        passwarn.textContent = " your password must be more complex add $ or * or / "
      
    }
    else {
        passwarn.style.display = "none";
    }
  
}
function userVal(){
    var usr = document.getElementById("username").value;
    var userwarn = document.getElementById("usrwarn");
    if (usr == "") {
        event.preventDefault
        userwarn.textContent = "username must be a should not be empty"
        userwarn.style.display = "block";
        userwarn.style.color = "red";
    }
    else if (usr.length < 3) {
        event.preventDefault
        userwarn.textContent = "username must be a should be more than 3 letters"
    }
    else if (isFinite(usr)) {
        event.preventDefault();
        userwarn.textContent = "username must be a string";
        userwarn.style.display = "block";
        userwarn.style.color = "red";
    }
  

    else {
        userwarn.style.display = "none";
    }
    console.log(usr)
}









function showPass() {
    var password = document.getElementById("password");
    var repeatPass = document.getElementById("val").value;
    if (password.type == "password") {

        password.type = "text";
    }
    else {
        password.type = "password"
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
        event.preventDefault();
        var notify = document.getElementById("noMatch");
        notify.style.display = "block";
        notify.style.color = "red";
   


    }
    else {
        document.cookie = `username=${userName};expires=Mon, 1 Jan 2023 00:00:00 `
        document.cookie = `password=${pass};expires=Mon, 1 Jan 2023 00:00:00 `
       
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


function emailVal(){
    var email=document.getElementById("email").value;
    var emailWarn=document.getElementById("emailwarn");
    if(email.length<5){
        emailWarn.style.display="block";
        emailWarn.style.color="red";
        emailWarn.textContent="email must be more than 5 characters"
    }
    else if(email.indexOf("@")==-1){
        emailWarn.textContent="email must include @"
    }
    else if(email.indexOf("@")<4){
        emailWarn.textContent="email must have  at least 3 letter before '@' "
    }
    
    else if(email.includes(".com")==false &&email.includes(".org")==false && email.includes(".gov")==false){
        emailWarn.textContent="email is inValid the End of the Email must be '.com' or '.org' or '.gov' "
    }
    else if(email.indexOf("com")-email.indexOf("@")<5){
        emailWarn.textContent="email must have letters between @ and .com "
    }
    else{
        emailWarn.style.display="none";
    }

}












function gDate() {
    var today = new Date();

var dateWarning=document.getElementById("datewarn");
    var birthDate = document.getElementById("d").value
    birthDate = new Date(`${birthDate}`);
if(today.getFullYear()-birthDate.getFullYear()<13){
    event.preventDefault()
dateWarning.style.display="block";
dateWarning.style.color="red";
dateWarning.textContent="your age must be more than 13"

}
else{
    dateWarning.style.display="none";
}


}

userNam();
showPass();
