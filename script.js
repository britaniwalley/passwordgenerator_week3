// button do something
// generating a set length password from 1 array and console.log
//connect the 2
var generateBtn = document.querySelector("#generate");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var lowercase = "abcdefghijklmnopqrstuvwxyz".split("")
var numbers = ("123456789").split("")
var specCharacters = ("!@#$%^&").split("")
var passwordLength = "8"
var selectedCharacters = []
var password = ""

function writePassword() {
  console.log(password);
}
function userOptions() {
  var length = (
    prompt("Please select a length between 8 and 128 characters")
  );
  if (isNaN(length) === true) {
    alert("Please enter a number between 8 and 128");
    return;
  }

  if (length < 8) {
    alert("Your password must be more than 8 characters");
    return;
  } 
  if (length > 128) {
    alert("Your password must be less than 129 characters");
    return;
  }
  //WHEN prompted for character types to include in the password 
  //THEN I choose useLowercase, uppercase, numeric, and/or special characters

  var uselowercase = confirm("Click okay to include lowercase letters, click cancel to not include");
    var useuppercase = confirm("Click okay to include uppercase letters, click cancel to not include");
    var usenumbers = confirm("Click okay to include numbers, click cancel to not include"); 
    var usespecCharacters = confirm("Click okay to include special characters, click cancel to not include");

  if (
    uselowercase === false &&
    useuppercase === false && 
    usenumbers === false && 
    usespecCharacters === false 
  ) {
    alert("You must choose at least 1 criteria for your password");
    return;

  }
}
  
  // user options
  
  function generatePassword() {

    //for loop 
    for (i = 0; i < passwordLength; i++) {
      // produce a random lowercase letter 8 times 
      password = password + selectedCharacters[Math.floor(math.random() * selectedCharacters.length)]
      // add random letter to our password string var
    }
    writePassword()

  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", userOptions);

  passwordLength = length

  generatePassword()