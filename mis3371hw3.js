function myFunction() {
  let x =
    document.getElementById("ssn").value;
  let text;
  if (isNaN(x) || x < 9 || x > 9) {
    text = "Input is not valid"
  }
  else {
    text = "Input is valid";
  }
  function myFunction() {
    var x = document.getElementById("pass");
    if(x.type === "password") {
      x.type = "text";}
    else {
      x.type = "password";
    }
    function myFunction() {
      var x = document.getElementById("ssn");
      if(x.type === "password") 
         {
         x.type = "text";}
      else {
        x.type = "password";
      }
      function validateFirstName() {
        let x = document.getElementById("firstname").value;
        if ( x == "") {
          alert("Incorrect input for name");
          return false;
        }
      }
      function validateDateOfBirth() {
        
      function validateEmail() {
        let x = document.getElementById("email").value;
        if (x < 7) {
          alert("Not enough character's");
          return false;
        }
      }
      function validateAddress() {
        let x = document.getElementById("address1").value;
        if ( x == "") {
          alert("Please enter in your address");
          return false;}
        else {
          document.getElementById("address_check").innerHTML = "Fits parameters";
        }
      }
      function validatePhone() {
        let x = document.getElementById("phone").value;
        if ( x < 10) {
          alert("Not enough characters");
          return false;}
        else {
          document.getElementById("phone_check").innerHTML = "Fits parameters";
        }
        var upperCaseLetters = /[A-Z]/g;
        if(myInput.value.match(upperCaseLetters)) {
          capital.classList.remove("invalid");
          capital.classList.add("valid"); }
        else {
          capital.classList.remove("valid");
          capital.classList.add("invalid"); }
        var lowerCaseLetters = /[a-z]/g;
        if(myInput.value.match(lowerCaseLetters)) {
          letter.classList.remove("invalid");
          letter.classList.add("valid"); }
        else {
          letter.classList.remove("valid");
          letter.classList.add("invalid");
        }
        if(myInput.value.length >= 8) {
          length.classList.remove("invalid");
          length.classList.add("valid"); }
        else {
          length.classList.remove("valid");
          length.classList.add("invalid); }
            
          
    
