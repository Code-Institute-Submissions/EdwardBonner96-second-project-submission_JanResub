// Constants store two alphabets each so modulo calculation is unneeded
const lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
const upperCaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Caeser Cipher encoding
function caeserEncode(inputText, keyEncode) {
  let keyAddedLowerCase = "";
  let keyAddedUpperCase = "";
  // Shifts alphabets by key input
  for (let i = 0; i < 26; i++) {
    let shiftedLowerCase = (keyEncode + i);
    keyAddedLowerCase += lowerCaseAlphabet[shiftedLowerCase];
    let shiftedUpperCase = (keyEncode + i);
    keyAddedUpperCase += upperCaseAlphabet[shiftedUpperCase];
  }
  // Encodes input message using shifted alphabet
  let encodedText = "";
  let inputLength = inputText.length;
  for (let i = 0; i < inputLength; i++) {
    // Tests if each input character is a letter, adds shift to letters
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

function encodeMessage() {
  let inputText = String(document.getElementById("caeser-input").value);
  let keyEncode = parseInt(document.getElementById("key-select").value);
  if (isNaN(keyEncode) || keyEncode < 0 || keyEncode > 26) {
    alert("Please enter an integer between 0 and 26");
    keyEncode = 0;
  }
  let finalMessage = document.getElementById("caeser-input");
  finalMessage.value = caeserEncode(inputText, keyEncode);
  document.getElementById("unscramble").innerHTML = "Key needed to unscramble message: " + (26 - keyEncode); 
}

function randomEncode() {
  let inputText = String(document.getElementById("caeser-input").value);
  let randomKey = Math.floor((25 * Math.random() + 1));
  let finalMessage = document.getElementById("caeser-input");
  finalMessage.value = caeserEncode(inputText, randomKey);
  document.getElementById("unscramble").innerHTML = "Random key: " + randomKey + " " + "Key to unscramble: " + (26 - randomKey); 
}

// Function clears text in input box
function clearText() {
  let clear = document.getElementById("caeser-input");
  clear.value = '';
}