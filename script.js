// Assignment Code
var generateBtn = document.querySelector("#generate");

const numChoices = "1234567890".split("");
const alphaLowerChoices = "abcdefghijklmnopqrstuvwxyz".split('');
const alphaUpperChoices = "ABCDEFGHIJKLMNOPQURTUVWXYZ".split('');
const symbolChoices = "!#$%&)(*+,-><?@^[]{}~".split("");
var random = 0;
var mixChoices = [];
var passwordOutput = "";


function getPref(){
var passLength = prompt("Password Length between 8 and 128");


if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    alert("Incorrect Input. Password Length between 8 and 128.");
    var passLength = prompt("Password Length between 8 and 128");
    ;
};
var qupper = confirm("Include uppercase letters?");
var qlower = confirm("Include lower case letters?");
var qnumber = confirm("Include numbers?");
var qsymbol = confirm("Include special symbols?");
//store all of the variables above in an object
var preferences = {
  length:passLength, 
  upperCase:qupper,
  lowerCase:qlower,
  numberChoice:qnumber,
  symbolChoice:qsymbol,
};
return preferences
};


function generatePassword(){
var userPref = getPref();
console.log(userPref)

if (userPref.upperCase){
  mixChoices = mixChoices.concat(alphaUpperChoices)
}

if (userPref.lowerCase) {
  mixChoices = mixChoices.concat(alphaLowerChoices)
}; 

if (userPref.numberChoice) {
  mixChoices = mixChoices.concat(numChoices)
}; 

if (userPref.symbolChoice) {
  mixChoices = mixChoices.concat(symbolChoices)
}; 

if (userPref.upperCase===false && userPref.lowerCase===false && userPref.numberChoice===false && userPref.symbolChoice===false){
  alert("No classes selected, Lower case and number will be selected for you.");
  mixChoices = alphaLowerChoices.concat(numChoices)
}


console.log(mixChoices);

for (var i = 1; i <= userPref.length; i++) {

  let random = Math.floor(Math.random() * mixChoices.length);
  console.log(random);

  //this uses the generated number to select the character from the array
  let randomChoice = mixChoices[random];
  console.log(randomChoice);
  passwordOutput = passwordOutput.concat(randomChoice);
  console.log(passwordOutput);   
};

}

// Write password to the #password input
function writePassword() {
  generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = passwordOutput;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
