const lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
let keyAddedLowerCase = "";
const upperCaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
let keyAddedUpperCase = "";

function caeserEncode(inputText, keyEncode) {
  for (let i = 0; i < 26; i++) {
    let shiftedLowerCase = (keyEncode + i);
    keyAddedLowerCase += lowerCaseAlphabet[shiftedLowerCase];
    let shiftedUpperCase = (keyEncode + i);
    keyAddedUpperCase += upperCaseAlphabet[shiftedUpperCase];
  }
  let encodedText = "";
  for (let i = 0; i <= inputLength; i++) {
    if (inputText[i].toUpperCase() !== inputText[i].toLowerCase()) {
      let transformedLetter = lowerCaseAlphabet.indexOf(inputText[i]);
      encodedText += keyAddedLowerCase[transformedLetter];
    } else {
      let transformedLetter = upperCaseAlphabet.indexOf(inputText[i]);
      encodedText += keyAddedUpperCase[transformedLetter];
    }
  }
  console.log(encodedText)
}



let randomKey = Math.floor((25 * Math.random() + 1));
console.log(randomKey);
let unscrambleKey = 26 - randomKey;
console.log(unscrambleKey);

// Function clears text in input box
function clearText() {
  let clear = document.getElementById("caeser-input");
  clear.value = '';
}