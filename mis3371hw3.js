function myFunction() { //Validates the ssn input, if it doesn't fit requirements, it returns a message
  let x =
    document.getElementById("ssn").value;
  let text;
  if (isNaN(x) || x < 9 || x > 9) {
    text = "Input is not valid"
  }
  else {
    text = "Input is valid";
  }
  function myFunction() { // Used to mask the password field
    var x = document.getElementById("pass");
    if(x.type === "password") {
      x.type = "text";}
    else {
      x.type = "password";
    }
  }
    function myFunction() {
      var x = document.getElementById("reenter");
      if(x.type === "password") {
        x.typw = "text";}
      else {
        x.type = "password";
      }
    }
    function myFunction() { //Used to mask the ssn 
      var x = document.getElementById("ssn");
      if(x.type === "password") 
         {
         x.type = "text";}
      else {
        x.type = "password";
      }
      const ssn = document.getElementById("ssn"); //This adds dashes after every 3 digits entered in for ssn
      ssn.addEventListener("input", (e)) {
        if(e.target.value.length === 3) {
          ssn.value = ssn.value + "-"};
        if(e.target.value.length === 7) {
          ssn.value = ssn.value + "-"};
      }
      
      function validateFirstName() {
        let x = document.getElementById("firstname").value;
        if ( x == "") {
          alert("Incorrect input for name"); //If first name doesn't fit the requirements, returns this message
          return false;
        }
      }
      const inputDate = new Date("1906-04-16"); //This makes sure that if the date input is greated than 120 years, there will be an error
      const currentDate = new Date();
      if (inputDate > currentDate) {
        console.log("Date is incorrect"); }
      else {
        console.log("Date is correct");
      }
      function validateEmail() { // Validates the email to fit the requirements 
        let x = document.getElementById("email").value;
        if (x < 7) {
          alert("Not enough character's");
          return false;
        }
      }
      function validateAddress() { // Validates the address to fit the requirements
        let x = document.getElementById("address1").value;
        if ( x == "") {
          alert("Please enter in your address");
          return false;}
        else {
          document.getElementById("address_check").innerHTML = "Fits parameters";
        }
      }
      function validatePhone() { //Validates phone number to fit requirements 
        let x = document.getElementById("phone").value;
        if ( x < 10) {
          alert("Not enough characters");
          return false;}
        else {
          document.getElementById("phone_check").innerHTML = "Fits parameters";
        }
        var upperCaseLetters = /[A-Z]/g; // Validates the password field to make sure it has all of the elements required
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
            
          
    
