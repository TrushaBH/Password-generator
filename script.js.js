var generateBtn = document.querySelector("#generate");
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var Lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var Upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var confirmLength = (prompt("How many characters would you like your password to contain?"));

  passwordText.value = password;

}
while(confirmLength <= 7 || confirmLength >= 51) {
  alert("Password length must be between 8-50 characters Try again");
  var confirmLength = (prompt("How many characters would you like for your password?"));
  } 

  // Repeat back how many charactes the user will have  
  alert(`Your password will have ${confirmLength} characters`);

// Determine parameters of password 
var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");
  // Loop if answer is outside the parameters 
  while(confirmUpperCase === false && confirmLowerCase === false && confirmSpecialCharacter === false && confirmNumericCharacter === false) {
    alert("You must choose at least one parameter");
    var confirmSpecialCharacter = confirm("Click OK to confirm if you would like to include special characters");
    var confirmNumericCharacter = confirm("Click OK to confirm if you would like to include numeric characters");    
    var confirmLowerCase = confirm("Click OK to confirm if you would like to include lowercase characters");
    var confirmUpperCase = confirm("Click OK to confirm if you would like to include uppercase characters");   
} 

  // Assign an action to the password parameters NEED TO FIX THIS
  var passwordChar = []
  
if (confirmSpecialCharacter) {
  passwordChar = passwordChar.concat(specChar)
}

if (confirmNumericCharacter) {
  passwordChar = passwordChar.concat(number)
}
  
if (confirmLowerCase) {
  passwordChar = passwordChar.concat(Lower)
}

if (confirmUpperCase) {
  passwordCharacters = passwordCharacters.concat(Upper)
}

  console.log(passwordCharacters)

  // Empty string to be filled based on for loop selecting random characters from the array
  var randomPassword = ""
  
  for (var i = 0; i < confirmLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword)
  }
  return randomPassword;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
