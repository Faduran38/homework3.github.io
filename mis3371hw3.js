/*
Author: Faviana A Duran 
Program Name: mis3371hw3.js
Date Created: April 10, 2026
Date Updated: April 17, 2026
Description: Validating elements and adding advanced editing 
*/
function initialstart() {
  let firstnameerror;
  let lastnameerror;
  let emailerror;
  let phoneerror;
  let addresserror;
  let passworderror;
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
    function maskReenter() {
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
      function validatefirstname()
    
          
      const inputDate = new Date("1906-04-16"); //This makes sure that if the date input is greated than 120 years, there will be an error
      const currentDate = new Date();
      if (inputDate > currentDate) {
        console.log("Date is incorrect"); }
      else {
        console.log("Date is correct");
      }
      function validateemail() { // Validates the email to fit the requirements 
        let x = document.getElementById("email").value;
        if (x < 7) {
          alert("Not enough character's");
          return false;
        }
      }
      function validateaddress() { // Validates the address to fit the requirements
        let x = document.getElementById("address1").value;
        if ( x == "") {
          alert("Please enter in your address");
          return false;}
        else {
          document.getElementById("address_check").innerHTML = "Fits parameters";
        }
      }
      function validatephone() { //Validates phone number to fit requirements 
        let x = document.getElementById("phone").value;
        if ( x < 10) {
          alert("Not enough characters");
          return false;}
        else {
          document.getElementById("phone_check").innerHTML = "Fits parameters";
        }
        function checkpasswords() {
          x=document.getElementById("pass").value;
          y=document.getElementById("reenter").value;
          if(x.value != "" && x==y) {
            document.getElementById("reenter_check").innerHTML = "Passwords match."; }
          else {
            document.getElementById("reenter_check").innerHTML = "Passwords need to match."; 
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
            
          
    
