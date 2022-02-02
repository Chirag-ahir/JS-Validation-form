function validate(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name.length < 3){
      text = "Please Enter valid Name!";
      error_message.innerHTML = text;
      return false;
    }
    if(subject.length < 5){
      text = "Please Enter Correct Subject!";
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
    alert("Data Updated Successfully!");
    return true;
  }
  