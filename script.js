// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // I need a new, secure password
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  console.log("Password output:", password)

  passwordText.value = password;
}//end writePassword() fct def

// generatePassword function should be below
// *********************** function logic **********************
function generatePassword() {

  //  need a prompt here and ask for the length from the user
  //  a length of at least 8 characters and no more than 128 characters
  var userChoice = prompt("length of your password must be at least 8 characters and no more than 128 characters: "); //should be integer

  // check IF the input number is < 8 and > 128
  if (userChoice < 8 || userChoice > 128 || userChoice == "") {
    alert("Please enter at least 8 characters and no more than 128 characters ")
    //ask them for the length again and store to userChoice
  }

  var userChoiceInt = parseInt(userChoice)


  var lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numberArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialCharacterArr = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", "/", ":", ";", "<", ">", "=", "?", "@", "^", "_", "~"];
  var collectionValid = [];
  var passwordArray = [];

  //  my input should be validated and at least one character type should be selected
  // each prompt needs to be validated...

 //if lower is true
  var lowerCase = confirm("Do you want to use a lowercase?");//ok = true/cancel=false

  if (lowerCase === true) {

    for (var i = 0; i < lowerCaseArr.length; i++) {
      collectionValid.push(lowerCaseArr[i]);
    }
  }


 //if uppercase is true
  var upperCase = confirm("Do you want to use a uppercase?");

  if (upperCase === true) {
    for (var i = 0; i < upperCaseArr.length; i++) {
      collectionValid.push(upperCaseArr[i]);
    }
  }


 //if number is true
  var number = confirm("Do you want to use a numeric?");
 
  console.log("Num set chosen?", number)
  if (number === true) {
    for (var j = 0; j < numberArr.length; j++) {
      collectionValid.push(numberArr[j]);
    }
  }


//if specialCharacter is true
  var specialCharacter = confirm("Do you want to use a special character?");

  if (specialCharacter === true) {
    for (var k = 0; k < specialCharacterArr.length; k++) {
      collectionValid.push(specialCharacterArr[k]);
    }
  }

  for (var p = 0; p < userChoiceInt; p++) {
    passwordArray.push(collectionValid[Math.floor(Math.random() * collectionValid.length)])
  }


  return passwordArray.join("");

}//end generatePass
// *********************** end function logic **********************

// WHEN I click the button to generate a password
generateBtn.addEventListener("click", writePassword);


