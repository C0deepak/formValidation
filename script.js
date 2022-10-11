var form = document.getElementById("form");
var uname = document.getElementById("name");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var dob = document.getElementById("dob");
var work = document.getElementById("work");
var password = document.getElementById("password");
var cpassword = document.getElementById("cpassword");
var check = document.getElementById("check");

form.addEventListener('submit', (event) => {
    event.preventDefault();
    validate();

    tickCheck();
})

var suname = document.getElementById("suname");
var semail = document.getElementById("semail");
var sphone = document.getElementById("sphone");
var sdob = document.getElementById("sdob");
var swork = document.getElementById("swork");
var spassword = document.getElementById("spassword");
var scpassword = document.getElementById("scpassword");
var scheck = document.getElementById("scheck");

function tickCheck(){
    if(!check.checked){
        showMsg(scheck, "red", "Must accept all terms and Conditions!");
    }
    else{
        showMsg(scheck, "mediumseagreen", "Accepted all terms and Conditions!");
    }
}


function validate(){
    // var suname;
    var unameval = uname.value.trim();
    var emailval = email.value.trim();
    var phoneval = phone.value.trim();
    var dobval = dob.value.trim();
    var workval = work.value.trim();
    var passwordval = password.value.trim();
    var cpasswordval = cpassword.value.trim();` `
    // vaildating username
    if(unameval === ""){
        showMsg(suname, "red", "username cannot be empty!");
    }
    else if(unameval.length <= 3){
        showMsg(suname, "gold", "username must be more than 3 character!");
    }
    else{
        let regExname = /^[A-Za-z ]{4,30}$/;
        if(!regExname.test(unameval)){
            showMsg(suname, "red", "username must be only digits!");
        }
        else
            showMsg(suname, "mediumseagreen", "username filled correct");
    }
    //validating email
    let regExemail = /^[A-Za-z0-9_.]{3,30}@[A-Za-z]{3,30}[.]{1}[a-zA-Z.]{2,6}$/;
    if(emailval === ""){
        showMsg(semail, "red", "email cannot be empty!");
    }
    else if(emailval.length <= 3){
        showMsg(semail, "gold", "email must be more than 3 character!");
    }
    else{
        if(!regExemail.test(emailval)){
            showMsg(semail, "red", "please enter a valid email!"); 
        }
        else
            showMsg(semail, "mediumseagreen", "email filled correct");
    }
    // validating phone
    if(phoneval === ""){
        showMsg(sphone, "red", "Phone number cannot be empty!");
    }
    else if(phoneval.length != 10){
        showMsg(sphone, "gold", "Phone Number must be 10 character!");
    }
    else{
        showMsg(sphone, "mediumseagreen", "Phone filled correct");
    }
    // validating date
    if(dobval === ""){
        showMsg(sdob, "red", "DOB cannot be empty!");
    }
    else{
        showMsg(sdob, "mediumseagreen", "DOB filled correct");
    }
    // validating work
    if(workval === ""){
        showMsg(swork, "red", "work cannot be empty!");
    }
    else{
        showMsg(swork, "mediumseagreen", "work filled correct");
    }
    // validating password
    let regExPass = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,15}$/;
    if(passwordval === ""){ 
        showMsg(spassword, "red", "Password cannot be empty!");
    }
    else if(!regExPass.test(passwordval)){
        showMsg(spassword, "red", "Password must include one special character and a number");
    }
    else{
        showMsg(spassword, "mediumseagreen", "Password filled correct");
        // validating confirm password
        if(passwordval != cpasswordval){
            showMsg(scpassword, "red", " Confirm Password must match above password!");
        }
        else{
            showMsg(scpassword, "mediumseagreen", "Confirm Password filled correct");
        }
    }
}

function showMsg(id, color, msg){
    id.style.cssText = `display: block; color: ${color}`;
    id.innerText = msg
}