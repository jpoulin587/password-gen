
// this set up the lists of characters we can use in the password.
const numChoices = "1234567890".split("");
const alphaLowerChoices = "abcdefghijklmnopqrstuvwxyz".split('');
const alphaUpperChoices = "ABCDEFGHIJKLMNOPQURTUVWXYZ".split('');
const symbolChoices = "!#$%&)(*+,-><?@^[]{}~".split("");

//declare other variables for the function
var random = 0;
var mixChoices = [];
var passwordOutput = "";
var passLength;



    var passLength = prompt("Password Length between 8 and 128");

    if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
        alert("Incorrect Input. Password Length between 8 and 128.");

    };


var qupper = confirm("Include uppercase letters?");
var qlower = confirm("Include lower case letters?");
var qnumber = confirm("Include numbers?");
var qsymbol = confirm("Include special symbols?");



//set of "if" statements that will merge the correct arrays to make the choices the user wants. 

if (qupper) {
    mixChoices = mixChoices.concat(alphaUpperChoices)
}; 

if (qlower) {
    mixChoices = mixChoices.concat(alphaLowerChoices)
}; 

if (qnumber) {
    mixChoices = mixChoices.concat(numChoices)
}; 

if (qsymbol) {
    mixChoices = mixChoices.concat(symbolChoices)
}; 

if (qupper===false && qlower===false && qnumber===false && qsymbol===false){
    alert("No classes selected, Lower case and number will be selected for you.");
    mixChoices = alphaLowerChoices.concat(numChoices)
}

console.log(mixChoices);

// Now we generate a random number and then multiply it by the number of choices.

function genPassword() {
 for (var i = 1; i <= passLength; i++) {

    let random = Math.floor(Math.random() * mixChoices.length);
    console.log(random);

    //this uses the generated number to select the character from the array
    let randomChoice = mixChoices[random];
    console.log(randomChoice);
    passwordOutput = passwordOutput.concat(randomChoice);
    console.log(passwordOutput);   
};
};

genPassword();
console.log("Here is your new password: "+passwordOutput);   
alert("Here is your new password: "+passwordOutput);  


