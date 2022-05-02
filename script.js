/* 
Substitution cipher code: working || case insensitive

Improvements: Is it possible to use regex to somehow trim this down?
Yes: https://stackoverflow.com/questions/72090648/how-to-implement-the-key-for-enter-in-a-dictionary/72090976#72090976
Improvements: Make it case sensitive? 
*/

//Global variables
let submitBtn = document.getElementById("submit-btn");
let message = document.getElementById("message");
let cipher = document.getElementById("cipher");

//Event listener for the submit button
submitBtn.addEventListener("click", () => {
  //Substitution function
  let caseString = message.value.toUpperCase().split("");
  let newString = [];
  for (let unit of caseString) {
    for (let letter in alphabet) {
      if (unit === alphabet[letter]) {
        newString.push(alphabet[unit]);
      }
    }
  }
  cipher.value = newString.join("");
});

//Dictionary object holding the alphabet keys & values
const alphabet = {
  A: "Z",
  B: "Y",
  C: "X",
  D: "W",
  E: "V",
  F: "U",
  G: "T",
  H: "S",
  I: "R",
  J: "Q",
  K: "P",
  L: "O",
  M: "N",
  N: "M",
  O: "L",
  P: "K",
  Q: "J",
  R: "I",
  S: "H",
  T: "G",
  U: "F",
  V: "E",
  W: "D",
  X: "C",
  Y: "B",
  Z: "A",
  " ": " ",
  "\n": "\n",
  "-": "-",
  _: "_",
  "!": "!",
  ":": ":",
  ";": ";",
  "'": "'",
  '"': '"',
  $: "$",
  "%": "%",
  "&": "&",
  "*": "*",
  "(": "(",
  ")": ")",
  "[": "[",
  "]": "]",
  "{": "{",
  "}": "}",
  "@": "@",
  ">": ">",
  "<": "<",
  "=": "=",
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  0: "0",
};
