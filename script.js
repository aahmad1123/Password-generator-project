// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
var numberArray = "1234567890".split("")

var lowerCaseArray="abcdefghijklmnopqrstuvwxyz".split("")
var upperCaseArray="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

var specialCharactersArray = "!@#$%^&*()".split("")

// goal is to get randomly generated string as return of generate password function. 
// create pools of potential characters in array
var characterPool = []
var finalPassword = []
function generatePassword(){
var length = prompt("How long would you like your password to be?")
if (length > 128){
  var length = prompt("Please enter a value below 128")
}
var specialCharacters = confirm("Special characters?")
var upperCase = confirm("Uppercase?")
var lowerCase = confirm("Lowercase?")
var numbers = confirm("Numbers?")

if (specialCharacters === true) {
  characterPool = characterPool.concat(specialCharactersArray)
}
if (upperCase === true){
  characterPool = characterPool.concat(upperCaseArray)
}
if(lowerCase === true){
  characterPool = characterPool.concat(lowerCaseArray)
}
if(numbers === true){
  characterPool = characterPool.concat(numberArray)
}
console.log(characterPool)
for (var i=0; i < length; i++){

  var randomIndex = Math.floor(Math.random() * characterPool.length);
  var characterValue = characterPool[randomIndex]
  finalPassword.push(characterValue)
  console.log(finalPassword)
}

  return finalPassword.join("")
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);