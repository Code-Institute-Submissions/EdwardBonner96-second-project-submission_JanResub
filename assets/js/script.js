// Constants store two alphabets each so modulo calculation is unneeded
const lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
let keyAddedLowerCase = "";
const upperCaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
let keyAddedUpperCase = "";

// Caeser Cipher encoding
function caeserEncode(inputText, keyEncode) {
  // Shifts alphabets with key
  for (let i = 0; i < 26; i++) {
    let shiftedLowerCase = (keyEncode + i);
    keyAddedLowerCase += lowerCaseAlphabet[shiftedLowerCase];
    let shiftedUpperCase = (keyEncode + i);
    keyAddedUpperCase += upperCaseAlphabet[shiftedUpperCase];
  }
  let encodedText = "";
  let inputLength = inputText.length;
  for (let i = 0; i < inputLength; i++) {
    // Tests if inputs are letters by changing cases
    if (inputText[i].toUpperCase() !== inputText[i].toLowerCase()) {
      if (inputText[i] == inputText[i].toUpperCase()) {
        let transformedLetter = upperCaseAlphabet.indexOf(inputText[i]);
        encodedText += keyAddedUpperCase[transformedLetter];
      } else {
        let transformedLetter = lowerCaseAlphabet.indexOf(inputText[i]);
        encodedText += keyAddedLowerCase[transformedLetter];
      }
    } else {
      let nonLetter = inputText[i];
      encodedText += nonLetter;
    }
  }
  return encodedText;
}

let manualKey = document.getElementById("manual-key-select");
manualKey.addEventListener('click', caeserEncode);

let randomKey = Math.floor((25 * Math.random() + 1));
console.log(randomKey);

let unscrambleKey = 26 - randomKey;
console.log(unscrambleKey);

function caeserEncode(event) { 
  tester.submit();
}
let testerForm = document.getElementById('caeser-text');
caeser-text.addEventListener('submit', caeserEncode);

// Function clears text in input box
function clearText() {
  let clear = document.getElementById("caeser-input");
  clear.value = '';
}