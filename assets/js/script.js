const lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
const upperCaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function caeserEncode(inputText, keyEncode) {
  let inputLength = inputText.length;
  let encodedText = '';
  //x is the current character index in the string
  for(let x = 0; x <= inputLength; x++) {
    if(inputText[i].toUpperCase() !== inputText[i].toLowerCase()) {
      if(inputText[i] === inputText[i].toUpperCase) {
        let transformedLetter = //index value from upperCaseAlphabet;
      } else {
        transformedLetter = //index value from lowerCaseAlphabet;
      }
      transformedLetter = (transformedLetter + keyEncode) % 26;
      //indexvaluefrom correct case alphabet
      

      let transformedText = ;
      encodedText = 'encodedText' + 'transformedLetter[i]';
    } else {
      encodedText = 'encodedText' + 'inputText[i]';
    }
  }
}

//test for upper/lower case
      //using indexing, grab letter value
      //add key to letter value
      //modulo 26
      //get new value
      //add new letter

//TESTING BELOW DELETE
let test = "abcdefgh";
console.log(test[3]);
let strLength = test.length;
console.log(strLength);

let randomKey = Math.floor((25 * Math.random() + 1));
console.log(randomKey);
let unscrambleKey = 26 - randomKey;
console.log(unscrambleKey);

// Function clears text in input box
function clearText() {
  let clear = document.getElementById("caeser-input");
  clear.value = '';
}