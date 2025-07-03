function validation() {
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;

    if (user =="") {
        document.getElementById("username").innerHTML = 
        "Please enter a Username";
        return false ;
    }

    if (user.length<=2 || user.length > 20) {
        document.getElementById("username").innerHTML = 
        "Username length should be between 2 and 20";
        return false;

    }

    if (!isNaN(user)) {
        document.getElementById("username").innerHTML = 
        "Only Characters allowed";
        return false;
    }

    if (pass=="") {
        document.getElementById("passwords").innerHTML = 
        "Please Enter the password";
        return false;
    }
    
    if (pass.length<=5) {
        document.getElementById("pass").innerHTML = 
        "Password length should be atleast 5";
        return false;

    }

    if (pass != confirmpass) {
        document.getElementById("confrmpass").innerHTML = 
        "Wrong Password";
        return false;
    }

}