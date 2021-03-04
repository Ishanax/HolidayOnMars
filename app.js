//form

//collect all fields of the form:
var fields = {};

//Linking all the fields to our fields object:
document.addEventListener("DOMContentLoaded", function() {
  //get all the form fields by id:
    fields.fullName = document.getElementById('fullName');
    fields.email = document.getElementById('email');
    fields.date = document.getElementById('date');
    fields.subject = document.getElementById('subject');
    fields.newsletter = document.getElementById('newsletter');
  })


//Check if user entered a value:
function isNotEmpty(value){
  //Check if value if not null or undefined, if so return false
  if (value == null ||typeof value == 'undefined') return false;
  //check if field value is at least one character long:
  return (value.length > 0);
}

//Check if string is an email:
function isEmail(email) {
  let regex =  /^[a-zA-Z0-9.!#$%&amp;'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return regex.test(String(email).toLowerCase());
}

//Main field validation function, this checks the condition and if there is an error colors the field red:
  //First parameter is the field itself, second is function be described before:
function fieldValidation(field, validationFunction) {
  //Check if the field exists:
  if (field == null) return false;
  //Check validity of field value:
  let isFieldValid = validationFunction(field.value)
  //check value and not than color the field:
  if (!isFieldValid) {
    field.className = 'placeholderRed';
  }
  //if field is valid we set className to empty string to clear formatting:
  else {
    field.className = '';
  }
  return isFieldValid;
}

//Central function for checking the validity of contact form, here we combine all the checks:
function isValid() {
  var valid = true;
  
  valid &= fieldValidation(fields.fullName, isNotEmpty);
  valid &= fieldValidation(fields.email, isEmail);
  valid &= fieldValidation(fields.subject, isNotEmpty);

  return valid;
 }



 //Sending the contact form
 function sendContact() {
   //Check validity:
   if(isValid()) {
    //let usr = new User(fullName.value, email.value, newsletter.checked, question.value);

     alert('I will see you on Mars!')
   }
   else {
     alert('You forgot to fill something in')
   }
 }

//nav bar

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myNav");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}
















/*function validate(form) {

  // validation code here ...
  var checkName = document.forms["myForm"]["name"].value; {
    if(checkName == "") {
      alert("Name must be filled out");
    }
  }

  var checkName = document.forms["myForm"]["email"].value; {
    if(checkName == "") {
      alert("Email must be filled out");
    }
  }

}*/