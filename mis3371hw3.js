/*
Author: Faviana A Duran 
Program Name: mis3371hw3.js
Date Created: April 10, 2026
Date Updated: April 19, 2026
Description: Validating elements and adding advanced editing 
*/
function initialstart() { //This is initiating all of the variables that are referenced in the js file 
  let errorcaught;
  let firstnameerror;
  let lastnameerror;
  let emailerror;
  let phoneerror;
  let addresserror;
  let passworderror;
  let passworderror2;
  checkdata();
  checkerror();
}
function validatessn() { //Validates the ssn input, if it doesn't fit requirements, it returns a message
  let x =
    document.getElementById("ssn").value;
  let text;
  if (isNaN(x) || x < 9 || x > 9) {
    text = "Input is not valid"
  }
  else {
    text = "Input is valid";
  }
  function maskPass() { // Used to mask the password field
    var x = document.getElementById("password");
    if(x.type === "password") {
      x.type = "text";}
    else {
      x.type = "password";
    }
  }
    function maskReenter() { //Masks the re-enter password text 
      var x = document.getElementById("reenter");
      if(x.type === "password") {
        x.type = "text";}
      else {
        x.type = "password";
      }
    }
    function maskSsn() { //Used to mask the ssn 
      var x = document.getElementById("ssn");
      if(x.type === "password") 
         {
         x.type = "text";}
      else {
        x.type = "password";
      }
      const ssn = document.getElementById("ssn"); //This adds dashes after every 3 digits entered in for ssn
      ssn.addEventListener("input", (e)) 
        if(e.target.value.length === 3) {
          ssn.value = ssn.value + "-"};
        if(e.target.value.length === 7) {
          ssn.value = ssn.value + "-"};
      }
      function validatefirstname() { //Validates first name 
        let x = document.getElementById("firstname").value;
        firstnameerror = 1; //Makes the error turn on 
        if(x.length< 2) {
          document.getElementById("gov_name").innerHTML = "Please add more characters.";
        errorcaught = 1; } //There was an error that was caught by there being less than 2 characters 
        else {
          if(x.match(/[A-Za-z-']+$/)) { // If the first name matches the pattern then the error flag turns off 
            document.getElementById("gov_name").innerHTML= "";
            firstnameerror = "0"; }
          }
        checkerror();
  } 
  function validatelastname() { // Validates the last name entered
    let x = document.getElementById("lastname").value;
    lastnameerror = 1; // Turns on error flag for the last name input 
    if(x.length<2) {
      document.getElementById("gov_name").innerHTML = "Please add more characters.";
    errorcaught=1; } // If the length is less than 2 characters, an error is displayed 
    else {
      if(x.match(/[A-Za-z-']+$/)) { // If the last name matches this pattern, it will be valid
        document.getElementById("gove_name").innerHTML = '';
        lastnameerror = 0;}
    }
    checkerror();
  }
      const inputDate = new Date("1906-04-16"); //This makes sure that if the date input is greated than 120 years, there will be an error
      const currentDate = new Date();
      if (inputDate > currentDate) {
        console.log("Date is incorrect"); }
      else {
        console.log("Date is correct");
      }
      function validateemail() { // Validates the email to fit the requirements 
        let x = document.getElementById("email").value;
        emailerror= 1;
        if (x.length < 5) {
          document.getElementById("email_check").innerHTML = "Invalid email length.";
        errorcaught=1; }
        else {
          if(x.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) { // Email must fit this pattern for the error to turn off 
            document.getElementById("email_check").innerHTML = '';
            emailerror = 0;}
      }
        checkerror();
  }
      function validateaddress() { // Validates the address to fit the requirements
        let x = document.getElementById("address1").value;
        addresserror = 1; 
        if (x.length < 2) {
          document.getElementById("address_check").innerHTML = "Invalid address length.";
          errorcaught=1;}
        else {
          if(x.length>2) { // Email address must be greater than 2 characters for the error flag to turn off 
            document.getElementById("address_check").innerHTML = "";
            addresserror=0;}
        }
          checkerror();
      }
      function validatephone() { //Validates phone number to fit requirements 
        let x = document.getElementById("phone").value;
        phoneerror=1;
        if(x.length < 9) { 
          document.getElementById("phone_check").innerHTML = "Invalid length.";
          errorcaught=1;}
        else {
          document.getElementById("phone_check").innerHTML = "";
          phoneerror=0;
        }
        checkerror();
      }
        function checkpasswords() { // This makes sure that both of the passwords match 
          x=document.getElementById("pass").value;
          y=document.getElementById("reenter").value;
          passworderror=1;
          if(x.value != "" && x===y) { 
            document.getElementById("reenter_check").innerHTML = "Passwords match."; 
          passworderror=0; }
          else {
            document.getElementById("reenter_check").innerHTML = "Passwords need to match."; 
         errorcaught=1; }
          checkerror();
        }
  function validatepassword() { //Validates the password input 
    passworderror2=0;
    var passwordproduct;
    var passwordinsert = document.getElementById("pass").value;
    console.log(passwordinsert);
    if(passwordinsert.search(/[a-z]/) <1){
      passwordproduct = "Need atleast 1 lowercase letter.";
      errorcaught=1;
      passworderror2=1;}
    else{
      passwordproduct = "" }
    document.getElementById("pass_check").innerHTML = passwordproduct; 
    if(passwordinsert.length < 8) {
      passwordproduct = "Must enter more characters."; }
    document.getElementById("pass_check").innerHTML = passwordproduct;
    checkerror();
  }
        var upperCaseLetters = /[A-Z]/g; // Gives a list of the password requirements to make sure it has all of the elements
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
                               
function checkerror() { // Checks if all of the errors are fixed 
  if (firstnameerror + lastnameerror + emailerror + addresserror + phoneerror + passworderror == 0)
  {
    document.getElementById("submit").disabled = false; // If they are fixed then the submit button will be turned back on 
  } // ^This part of the code is referenced from Prof. Messingers class/example
}
function checkdata() {  // Checks all of the data and makes sure that all elements are validated so user can submit
  errorcaught = "0";
  validatefirstname();
  validatelastname();
  validateemail();
  validatephone();
  validateaddress();
  checkpasswords();
  console.log("Error made: " +errorcaught);
  if(errorcaught == "1"){
    alert("Please fix errors on the form.");}
  else {
    document.getElementById("submit").disabled = false;
  }
}
