// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordResult = "";
// create array for loewrcase english chars
var letters = "abcdefghijklmnopqrstuvwxyz";
var lowerCaseArray = letters.split("");
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var upperCaseArray = upperCaseLetters.split("");
var symbols = "!@#$%^&*()_+";
var symbolsArray = symbols.split("");
var numbers = "1234567890";
var numbersArray = numbers.split("");
var arrayofArrays = [lowerCaseArray, upperCaseArray, symbolsArray, numbersArray]

var numOfChars;
var useUpperCase;
var useSymbols;
var useNumbers;

// generate password
function generatePassword() {
    getPrompts();
    console.log(numOfChars);
    var pass = buildPassword();
    return pass;
}
//this should be global
function getPrompts() {
    numOfChars = prompt("how many characters do you want?");
    useUpperCase = confirm("DO YOU WANT UPPERCASE LETTERS?");
    useSymbols = confirm("Do you want to use symbols?");
    useNumbers = confirm("Do you want to use numbers?");
}

function buildPassword() {
    // check for number and proper length of pass
    
    if (!isNaN(parseInt(numOfChars)) && numOfChars >= 8 && numOfChars <= 128) {
        for (var i = 0; i < numOfChars; i++) {
            addCharFromArray(lowerCaseArray);  }
            if (useUpperCase === true){
            addCharFromArray(symbolsArray);  }
            if (useSymbols === true){
            addCharFromArray(numbersArray);  }
            if (useNumbers === true){
              addCharFromArray(symbolsArray);  }
    }
    return passwordResult;
}

// function that adds a character from one array to the pw
function addCharFromArray(arr) {
    // build pass
    passwordResult += getRandomFromArray(lowerCaseArray);
    passwordResult += getRandomFromArray(upperCaseArray);
    passwordResult += getRandomFromArray(symbolsArray);
    passwordResult += getRandomFromArray(numbersArray);
}
// utility func to get a random element from array
function getRandomFromArray(arr) {
    return arr[parseInt(Math.random() * arr.length)];
}
// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
    passwordResult = "";
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);