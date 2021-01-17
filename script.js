//Assignment code (variables)
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
var numbers = ("123456789").split("");
var specCharacters = ("!@#$%^&").split("");
var passwordLength = "8";
var selectedCharacters = [];
var password = [];
var length = "";

function writePassword() {
   length = prompt("Please select a length between 8 and 128 characters")
   if(length < 8 || length > 128 || isNaN(length)) {
    alert("Your password must be between 8 and 128 characters");
    return;
   }
   if(uppercase) {
    confirm("Click okay to include lowercase letters, click cancel to not include");
    console.log(uppercase)
    return;
   } else {
     console.log("don't include uppercase letters")

   }
   if(lowercase) {
    confirm("Click okay to include lowercase letters, click cancel to not include");
    return;
   }
   if(numbers) {
    confirm("Click okay to include numbers, click cancel to not include");
    return;
   }
   if(specCharacters) {
    confirm("Click okay to include special characters, click cancel to not include");
    return;
   }
   if (
    uselowercase === false &&
    useuppercase === false &&
    usenumbers === false &&
    usespecCharacters === false
  ) {
    alert("You must choose at least 1 criteria for your password");
    return;

  }

passwordText = document.querySelector("#password");
console.log(password)
passwordText.textContent = password



}


  
 

//   //for loop 
  for (i = 0; i < passwordLength; i++) {
    // produce a random lowercase letter 8 times 
    var password =  password + selectedCharacters[Math.floor(math.random() * selectedCharacters.length)]
    // add random letter to our password string var 
    password = password + selectedCharacters[Math.floor(math.random() * selectedCharacters.length)]
  }

// }
// Add event listener to generate button
