function validation(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    var text;

    error_message.style.padding = "10px";

    if(name.length <= 1){
        text = "Please Enter Valid Name";
        error_message.innerHTML = text;
        return false;
    }
    if(subject.length <= 1){
        text = "Please Enter Correct Subject";
        error_message.innerHTML = text;
        return false;
    }

    // Input has to be number in phone number Selection
    if(isNaN(phone) || phone.length != 10){
        text = "Please Enter Valid Phone Number";
        error_message.innerHTML = text;
        return false;
    }

    //Throw error if @ does not include in email section.
    if(email.indexOf("@") == -1 || email.length< 6 ){
        text = "Please Enter Valid Email";
        error_message.innerHTML = text;
        return false;
    }

    if(message.lenght <= 1){
        text = "Please Enter More Than 1 Character";
        error_message.innerHTML = text;
        return false;
    }
    alert("Message is successfully sent!")
    return true;
 
}