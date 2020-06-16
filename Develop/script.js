// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// generatePassword function should be below

// *********************** function logic **********************
    // THEN I am presented with a series of prompts for password criteria
    // ??????? what series
    // WHEN prompted for password criteria
    // THEN I select which criteria to include in the password
    // ????? i thought that is a given

    // collected all the data here *************************
    // ************ 1 PROMPT *************
    // ************ need validation ***********
    // WHEN prompted for the length of the password
    // THEN I choose a length of at least 8 characters and no more than 128 characters
    // we need a prompt here and ask for the length from the user
    // check IF the input number is < 8 and > 128 

    // WHEN I answer each prompt
    // THEN my input should be validated and at least one character type should be selected
    // each prompt needs to be validated...
    // in this case, we should probably use a function to turn the length into a number


    // ************** 4 confirms **************
    // WHEN prompted for character types to include in the password
    // THEN I choose lowercase, uppercase, numeric, and/or special characters
    // we need a confirm to ask the user if they want to use lowercase
    // we need a confirm to ask the user if they want to use uppercase
    // we need a confirm to ask the user if they want to use numeric
    // we need a confirm to ask the user if they want to use special characters

    // end of "collected all the data here" *************************
    // using the number from above and the 4 booleans


    // WHEN all prompts are answered
    // THEN a password is generated that matches the selected criteria
    // all the information is gathered (all prompts are finished getting input)
    // all the HARD logic goes here ????????
    
    // WHEN the password is generated
    // THEN the password is either displayed in an alert or written to the page
    // either do an alert with password... or just check to see if my variable has a password

// *********************** end function logic **********************






// Add event listener to generate button
// WHEN I click the button to generate a password
// generateBtn.addEventListener("click", writePassword);