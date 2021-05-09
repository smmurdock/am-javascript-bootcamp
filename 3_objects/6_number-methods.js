let num = 103.941;

console.log(num.toFixed(2)); // 103.94

console.log(Math.round(num)); // 104
console.log(Math.floor(num)); // 103
console.log(Math.ceil(num)); // 104

let min = 1;
let max = 100;
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
// 0 - .999999
console.log(randomNum); // 67 (can change each time you run the program)

// Challenge Area
// Guessing Game
// create a function (guess) and generate number in given range
// 1 - 5; return true if correct, false if not correct

let makeGuess = function(guess) {
  let min = 1;
  let max = 5;
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return guess === randomNumber;
};

console.log(makeGuess(1)); // false (can change each time you run the program)
