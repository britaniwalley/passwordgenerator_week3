//Assignment code (variables)
var generateBtn = document.querySelector("#generate");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
var numbers = ("123456789").split("");
var specCharacters = ("!@#$%^&").split("");
var selectedCharacters = [];
var password = [];
var length;
var passwordText = document.querySelector("#password");

function writePassword() {
    passwordText.innerHTML = "Your Secure Password"

    length = parseInt(prompt("Please select a length between 8 and 128 characters"))
    console.log(length);
    if (length < 8 || length > 128 || isNaN(length)) {
        alert("Your password must be between 8 and 128 characters");
        return;
    }
    var isUppercase = confirm("Click okay to include uppercase letters, click cancel to not include");
    if (isUppercase) {
        selectedCharacters = selectedCharacters.concat(uppercase)
        var random = [Math.floor(Math.random() * uppercase.length)]
        password.push(uppercase[random]);
        console.log("include uppercase letters");
    } else {
        console.log("don't include uppercase letters");
    }
    var isLowercase = confirm("Click okay to include lowercase letters, click cancel to not include");
    if (isLowercase) {
        selectedCharacters = selectedCharacters.concat(lowercase)
        var random = [Math.floor(Math.random() * lowercase.length)]
        password.push(lowercase[random]);
        console.log("include lowercase letters");
    } else {
        console.log("don't include lowercase letters");
    }
    var hasNumbers = confirm("Click okay to include numbers, click cancel to not include");
    if (hasNumbers) {
        selectedCharacters = selectedCharacters.concat(numbers)
        var random = [Math.floor(Math.random() * numbers.length)]
        password.push(numbers[random]);
        console.log("include numbers");
    } else {
        console.log("don't include numbers");
    }
   var hasSpecCharacters = confirm("Click okay to include special characters, click cancel to not include");
    if (hasSpecCharacters) {
        selectedCharacters = selectedCharacters.concat(specCharacters)
        var random = [Math.floor(Math.random() * specCharacters.length)]
        password.push(specCharacters[random]);
        console.log("include special characters");
    } else {
        console.log("don't include special characters");
    }
    if (
        isLowercase === false &&
        isUppercase === false &&
        hasNumbers === false &&
        hasSpecCharacters === false
      ) {
        alert("You must choose at least 1 criteria for your password");
        return;
      }
    generatePassword();
    console.log(selectedCharacters)
}

function generatePassword() {
    console.log(password.length)
    console.log(password)
    console.log(typeof length)
    var passwordLength = length - password.length
    for (var i = 0; i < passwordLength; i++) {
        var random = [Math.floor(Math.random() * selectedCharacters.length)]
        password.push(selectedCharacters[random]);
        passwordText.textContent = password.join("");
    }
console.log(password)
}

generateBtn.addEventListener("click", writePassword);





