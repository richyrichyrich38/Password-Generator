// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


// Function to prompt user for password options
function getPasswordOptions() {
  
  var arr = [];
  var input;
  input = prompt("Please enter a number between 10 and 64 to determine your password length");
  input = +(input);
  console.log(typeof input);

  if (isNaN(input) || input < 10 || input > 64) {
    for (; true;) {
      alert("Your input: " + input + " Please enter numbers ONLY");
      input = prompt("Please enter a number between 10 and 64 to determine your password length");
      input = +(input);
      console.log("Initial value: ", typeof input);
      if (typeof input === "number" && input >= 10 && input <= 64) {
        break;
      }
      else { continue; }
    }
  }


  var passwordChar = [
    {
      selection: confirm("Press 'OK' to include special characters"),
      char: specialCharacters
    },
    {
      selection: confirm("Press 'OK' to include numbers"),
      char: numericCharacters
    },
    {
      selection: confirm("Press 'OK' to include lower case characters"),
      char: lowerCasedCharacters
    },
    {
      selection: confirm("Press 'OK' to include upper case characters"),
      char: upperCasedCharacters
    }
  ]

  passwordChar.forEach(items => {
    if (items.selection === true) {
      arr.push(items.char);
    }
  });

  var output = [arr, input];
  return output;
}


// Function for getting a random element from an array
function getRandom(arr) {
  var arr2 = [];

  for (var i = arr2.length; i < arr[1]; i++) {
    var indexRandom = Math.floor(Math.random(arr[0].length) * arr[0].length);
    var accessRandonArrays = Math.floor(Math.random(arr[0][indexRandom].length) * arr[0][indexRandom].length);
    var char = arr[0][indexRandom][accessRandonArrays];
    arr2.push(char);
  }
  return arr2;
}

// Function to generate password with user input
function generatePassword() {

  var getPasswordOptions_output = getPasswordOptions();
  var password = getRandom(getPasswordOptions_output);

  var randomPassword = "";

  password.forEach(p => { randomPassword += p; });
  return randomPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);