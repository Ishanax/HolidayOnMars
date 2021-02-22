//form

function validate(form) {

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

}