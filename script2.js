//Assignment code (variables)
var generateBtn = document.querySelector("#generate");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
var numbers = ("123456789").split("");
var specCharacters = ("!@#$%^&").split("");
var passwordLength = "8";
var selectedCharacters = [];
var password = [];
var length;
var passwordText = document.querySelector("#password");

function writePassword() {
   
    // password.splice(0, password.length);

   length = prompt("Please select a length between 8 and 128 characters")
   console.log(length);
   if(length < 8 || length > 128 || isNaN(length)) {
    alert("Your password must be between 8 and 128 characters");
    return;
   }
   if(uppercase) {
    confirm("Click okay to include uppercase letters, click cancel to not include");
    selectedCharacters = selectedCharacters.concat(uppercase)
    console.log("include uppercase letters");
   } else {
       console.log("don't include uppercase letters");
       return;
   }
   if(lowercase) {
    confirm("Click okay to include lowercase letters, click cancel to not include");
    selectedCharacters = selectedCharacters.concat(lowercase)
    console.log("include lowercase letters");
   } else {
       console.log("don't include lowercase letters");
       return;
   }
   if(numbers) {
    confirm("Click okay to include numbers, click cancel to not include"); 
    selectedCharacters = selectedCharacters.concat(numbers)
    console.log("include numbers");
   } else {
       console.log("don't include numbers");
       return;
   }
   if(specCharacters) {
    confirm("Click okay to include special characters, click cancel to not include"); 
    selectedCharacters = selectedCharacters.concat(specCharacters)
    console.log("include special characters");
   } else {
       console.log("don't include special characters");
       return;
   } 
generatePassword();
console.log(selectedCharacters)
} 

generateBtn.addEventListener("click", writePassword); 

function generatePassword() {
  for (var i=0; i<passwordLength; i++) {
    var random = [Math.floor(Math.random() * selectedCharacters.length)]
    password.push(selectedCharacters[random]);
    passwordText.textContent = password.join("");
  }

} 







