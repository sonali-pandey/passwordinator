// Assignment code here
var lowerChar = 'abcdefghijklmnopqrstuvwxyz';
var upperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var number = "0123456789";
var special = "!@#$%^&*_-+=";


var charSelector = function(){

  var passwordChar = '';
  // confirm the length of the password
  var length = window.prompt("Please provide the number of characters for password. \n Minimum: 8 \n Maximum: 128");

  // check if want to include lower case
  var lowerCase = window.prompt("Do you want to include 'Lower case character' in the password? \n Choose: \n 'Y' for Yes \n 'N' for No");
  if (lowerCase === 'y' || lowerCase === 'Y'){
    passwordChar += lowerChar;
  }

  // check if want to include upper case
  var upperCase = window.prompt("Do you want to include 'Upper case character' in the password? \n Choose: \n 'Y' for Yes \n 'N' for No");
  if (upperCase === 'y' || lowerCase === 'Y'){
    passwordChar += upperChar;
  }

  // check if want to add numeric character
  var numeric = window.prompt("DO you want to add 'Numeric character' in the password? \n Choose: \n 'Y' for Yes \n 'N' for No");
  if(numeric === 'y' || numeric === 'Y'){
    passwordChar += number;
  }

  // check if want to add special character
  var specialChar = window.prompt("Do you want to add 'Special character' in the password? \n Choose: \n 'Y' for Yes \n 'N' for No");
  if (specialChar === 'y' || specialChar === 'Y'){
    passwordChar += special;
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

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
