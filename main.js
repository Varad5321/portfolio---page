
const navbarMenu = document.querySelector(".navbar .links");
const menuBtn = document.querySelector(".menu-btn");
const hideMenuBtn = navbarMenu.querySelector(".close-btn");
const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = document.querySelector(".form-popup .close-btn");

const loginSignupLink = document.querySelectorAll(".form-box .bottom-link a");

menuBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("show-menu");
});

hideMenuBtn.addEventListener("click", () => menuBtn.click());

showPopupBtn.addEventListener("click", () => {
  document.body.classList.toggle("show-popup");
});

hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

loginSignupLink.forEach((link) => {
  link.addEventListener("click", (f) => {
    f.preventDefault();
    formPopup.classList[link.id === "signup-link" ? "add" : "remove"]("show-signup");
  });
});


function validationlogin() {
  var user = document.getElementById("user").value;
  var pass = document.getElementById("pass").value;

  if (user == "") {
    document.getElementById("username").innerHTML = " ** Please enter an emailId";
    return false;
  }

  if (user.length <= 2 ) {
    document.getElementById("username").innerHTML = " ** Invalid Email";
    return false;
  }

  if (isNaN(user) == false) {
    document.getElementById("username").innerHTML = " ** Only characters allowed";
    return false;
  }

  if (pass == "") {
    document.getElementById("passwords").innerHTML = "Please Enter the password";
    return false;
  }

  if (pass.length <= 5) {
    document.getElementById("passwords").innerHTML = "Password length should be at least 5";
    return false;
  }
}


function validationsignup() {
  var email = document.getElementById("emailid").value;
  var pass = document.getElementById("signup-pass").value;

  if (email == "") {
    document.getElementById("Email").innerHTML = " ** Please fill the email id field";
    return false;
  }

  if (email.indexOf("@") <= 0) {
    document.getElementById("Email").innerHTML = " ** Invalid Email";
    return false;
  }

  if (
    email.charAt(email.length - 4) != "." &&
    email.charAt(email.length - 3) != "."
  ) {
    document.getElementById("Email").innerHTML = " ** Invalid Email";
    return false;
  }

  if (pass == "") {
    document.getElementById("Pass").innerHTML = " ** Please fill the password field";
    return false;
  }

  if (pass.length <= 5 || pass.length > 20) {
    document.getElementById("Pass").innerHTML = " ** Password length must be between 5 and 20";
    return false;
  }
}
