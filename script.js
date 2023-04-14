function validate(){
    var fname = document.getElementById("firstName").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var pass1 = document.getElementById("pass1").value;
    var pass2 = document.getElementById("pass2").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(fname.length < 3 || fname === '' || fname === null){
      text = "Please Enter valid Name!";
      error_message.innerHTML = text;
      return false;
    }
    if(isNaN(phone) || phone.length != 10){
      text = "Phone number should be of 10 digit";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email!";
      error_message.innerHTML = text;
      return false;
    }
    if(pass1 != pass2){
      text = "Passwords do not match";
      error_message.innerHTML = text;
      return false;
    }

  }


// =============== Logic to check validation criteria ========================

var pfield = document.getElementById("pfield");
var myInput = document.getElementById("pass1");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var spchar = document.getElementById("spchar");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }

  //validate special character
  var special = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
  if(myInput.value.match(special)) {  
    spchar.classList.remove("invalid");
    spchar.classList.add("valid");
  } else {
    spchar.classList.remove("valid");
    spchar.classList.add("invalid");
  }

  if(myInput.value.match(special) && myInput.value.length >= 8 && myInput.value.match(numbers) && myInput.value.match(upperCaseLetters) && myInput.value.match(lowerCaseLetters) ){
    pfield.classList.remove("pinvalid");
    pfield.classList.add("pvalid");
  } else{
    pfield.classList.remove("pvalid");
    pfield.classList.add("pinvalid");
  }

}
  
// =============== Logic to check confirm password is same as password or not ========================

var myInputPassword = document.getElementById("pass2");

// When the user clicks on the password field, show the message box
myInputPassword.onfocus = function() {
  document.getElementById("message1").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInputPassword.onblur = function() {
  document.getElementById("message1").style.display = "none";
}
  
myInputPassword.onkeyup = function() {
  if(myInput.value ==  myInputPassword.value){  
    cmessage.classList.remove("invalid");
    cmessage.classList.add("valid");
  } else {
    cmessage.classList.remove("valid");
    cmessage.classList.add("invalid");
  }
}


function mandatory(){
  if (fname.value === '' || phone.value === '' || myInput.value != myInputPassword.value || myInput.value === '' || myInputPassword.value === '') {
    text = "Please fill all mandatory details";
    error_message.innerHTML = text;
    return false; 
  } else {
    return true;
  }
}
