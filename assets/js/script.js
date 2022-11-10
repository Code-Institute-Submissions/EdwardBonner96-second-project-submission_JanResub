const lowerCaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
const upperCaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function caeserEncode() {
  
}

let randomKey = Math.floor((25 * Math.random() + 1));
console.log(randomKey);
let unscrambleKey = 26 - randomKey;
console.log(unscrambleKey);

//TESTING BELOW DELETE
let test = "abcdefgh";
console.log(test[3]);
let strLength = test.length;
console.log(strLength);

// Function clears text in input box
function clearText() {
  let clear = document.getElementById("caeser-input");
  clear.value = '';
}