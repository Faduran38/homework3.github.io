/*
Author: Faviana A Duran 
Program Name: mis3371hw3.js
Date Created: April 10, 2026
Date Updated: April 17, 2026
Description: Validating elements and adding advanced editing 
*/
function initialstart() {
  let errorcaught;
  let firstnameerror;
  let lastnameerror;
  let emailerror;
  let phoneerror;
  let addresserror;
  let passworderror;
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
      function validatefirstname() {
        let x = document.getElementById("firstname").value;
        firstnameerror = 1;
        if(x.length< 2) {
          document.getElementById("gov_name").innerHTML = "Please add more characters.";
        errorcaught = 1; }
        else {
          if(x.match(/[A-Za-z-']+$/)) {
            document.getElementById("gov_name").innerHTML= "";
            firstnameerror = 0; }
          }
        checkerror();
  } 
  function validatelastname() {
    let x = document.getElementById("lastname").value;
    lastnameerror = 1;
    if(x.length<2) {
      document.getElementById("gov_name").innerHTML = "Please add more characters.";
    errorcaught=1; }
    else {
      if(x.match(/[A-Za-z-']+$/)) {
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
          if(x.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
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
          if(x.length>2) {
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
        function checkpasswords() {
          x=document.getElementById("pass").value;
          y=document.getElementById("reenter").value;
          passworderror=1;
          if(x.value != "" && x==y) {
            document.getElementById("reenter_check").innerHTML = "Passwords match."; 
          passworderror=0; }
          else {
            document.getElementById("reenter_check").innerHTML = "Passwords need to match."; 
         errorcaught=1; }
          checkerror();
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
                               
function checkerror() {
  if (firstnameerror + lastnameerror + emailerror + addresserror + phoneerror + passworderror == 0)
  {
    document.getElementById("submit").disabled = false;
  }
}
function checkdata() {  
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
