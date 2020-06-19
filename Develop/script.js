// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // I need a new, secure password
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// generatePassword function should be below
// *********************** function logic **********************
function generatePassword() {
  // myrandomness = myrandomness + collectionValid[Math.floor(Math.random() * collectionValid.length)]


  // collected all the data here *************************
  // ************ 1 PROMPT *************
  // ************ need validation ***********
  var userChoice = prompt("length of your password must be at least 8 characters and no more than 128 characters: "); //should be integer

  if (userChoice < 8 || userChoice > 128 || userChoice == "") {
    alert("Please enter at least 8 characters and no more than 128 characters ")
    //ask them for the length again and store to userChoice
  }

  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialCharacter = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", "/", ":", ";", "<", ">", "=", "?", "@", "^", "_", "~"];
  var collectionValid = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "#", "$", "%", "&", "(", ")", "*", "+", "-", "/", ":", ";", "<", ">", "=", "?", "@", "^", "_", "~"];
  var passwordArray = [];
  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  // we need a prompt here and ask for the length from the user
  // check IF the input number is < 8 and > 128 
  
  // WHEN I answer each prompt
  // THEN my input should be validated and at least one character type should be selected
  // each prompt needs to be validated...
  // in this case, we should probably use a function to turn the length into a number
  
  // ************** 4 confirms **************
  
  var lowerCase = confirm("Do you want to use a lowercase?");//ok = true/cancel=false
  //???
  //if lowerCase is true
  if (lowerCase === true) {
    for (var i = 0; i < lowerCase.length; i++) {
      passwordArray.push(lowerCase[i]);
    }
  }
  //passwordArray.push(????)


  var upperCase = confirm("Do you want to use a uppercase?");
  //???
  //if lowerCase is true
  if (upperCase === true) {
    for (var i = 0; i < upperCase.length; i++) {
      passwordArray.push(upperCase[i]);
    }
  }
  //passwordArray.push(????)


  var number = confirm("Do you want to use a numeric?");

  //???
  //if upperCase is true
  if (number === true) {
    for (var i = 0; i < number.length; i++) {
      passwordArray.push(number[i]);
    }
  }
  //passwordArray.push(????)

  var specialCharacter = confirm("Do you want to use a special character?");
  //???
  //if lowerCase is true
  if (lowerCase === true) {
    for (var i = 0; i < specialCharacter.length; i++) {
      passwordArray.push(specialCharacter[i]);
    }
  }
  //passwordArray.push(????)



  // end of "collected all the data here" *************************
  // using the number from above and the 4 booleans


  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria
  // all the information is gathered (all prompts are finished getting input)
  // all the HARD logic goes here ????????

  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page
  // either do an alert with password... or just check to see if my variable has a password

}
 // *********************** end function logic **********************
// Add event listener to generate button
  // WHEN I click the button to generate a password
  generateBtn.addEventListener("click", writePassword);


