
var lowerChar = 'abcdefghijklmnopqrstuvwxyz';
var upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var number = "0123456789";
var special = "!@#$%^&*_-+=";
var passwordChar = '';
var passwordlength;
var lowerCase;
var upperCase;
var numeric;
var specialCase;

function invalid(char){
  var flag = 0;
  if(char === "" || char === null){
    window.alert("Please enter a valid input!");
    flag = 1;
  }
  
  else{
    char = char.toLowerCase();
    if (char!== "y" && char!= "n"){
      window.alert("Please enter a valid input!");
      flag = 1;
    }
  }
  return flag;
};

var charSelector = function(){

  passwordLength();
  checkLowerCase();
  checkUpperCase();
  checkNumeric();
  checkSpecialChar();
  
  // confirm the length of the password
  function passwordLength(){
    length = window.prompt("Please provide the number of characters for password. \n Minimum: 8 \n Maximum: 128");
    if (!(length>=8 && length<= 128)){
      window.alert("Please enter a valid number!");
      passwordLength();
    }
  }


  // check if want to include lower case
  function checkLowerCase(){
  lowerCase = window.prompt("Do you want to include 'Lower case character' in the password? \n Choose: \n 'Y' for Yes \n 'N' for No");
  // check for invalid inputs
  var flag = invalid(lowerCase);

  // if invalid input re-prompt
  if (flag === 1){
    checkLowerCase();
  }

  lowerCase = lowerCase.toLowerCase();
  if (lowerCase === 'y'){
    passwordChar += lowerChar;
  }
};

  // check if want to include upper case
  function checkUpperCase(){
    upperCase = window.prompt("Do you want to include 'Upper case character' in the password? \n Choose: \n 'Y' for Yes \n 'N' for No");
    
    // check for invalid inputs
    var flag = invalid(upperCase);

    // if invalid input re-prompt
    if (flag === 1){
      checkUpperCase();
    }

    upperCase = upperCase.toLowerCase();
    if (upperCase === 'y'){
      passwordChar += upperChar;
    }
  };

 
  // check if want to add numeric character
  function checkNumeric(){
    numeric = window.prompt("DO you want to add 'Numeric character' in the password? \n Choose: \n 'Y' for Yes \n 'N' for No");
    
    // check for invalid inputs
    var flag = invalid(numeric);

    // if invalid input re-prompt
    if (flag === 1){
      checkNumeric();
    }

    numeric = numeric.toLowerCase();
    if(numeric === 'y' || numeric === 'Y'){
      passwordChar += number;
    }
  };
 
  // check if want to add special character
  function checkSpecialChar(){
    specialChar = window.prompt("Do you want to add 'Special character' in the password? \n Choose: \n 'Y' for Yes \n 'N' for No");
    // check for invalid inputs
    var flag = invalid(specialChar);

    // if invalid input re-prompt
    if (flag === 1){
      checkSpecialChar();
    }

    specialChar = specialChar.toLowerCase();
    if (specialChar === 'y'){
      passwordChar += special;
    }
  };

  // alert if no characters were selected
  if (lowerCase === 'n' && upperCase === 'n' && numeric === 'n' && specialChar === 'n'){
    window.alert("You need to select atleast 1 character type to generate a password!");
    charSelector();
  }

  return [passwordChar, length];

};

var generatePassword = function(){
  var passwordDetail = charSelector();
  var pwdChar = passwordDetail[0];
  var pwdLength = passwordDetail[1];
  var password = '';
    for (var i =0; i < pwdLength; i++){
      password += pwdChar.charAt(Math.floor(Math.random()* pwdChar.length));
    }
  return password;

};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.textContent = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
