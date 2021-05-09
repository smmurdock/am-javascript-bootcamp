// Multiple arguments
let add = function(a, b, c) {
  return a + b + c;
};

let result = add(10, 1, 5);
console.log(result);

// Default arguments
let getScoreText = function(name = "Anonymous", score = 0) {
  // return "Name: " + name + " - Score: " + score;
  return `Name: ${name} - Score: ${score}`;
};

let scoreText = getScoreText(undefined, 99);
// scoreText = getScoreText("Shanay", 100);
console.log(scoreText);
getScoreText("Shanay", 100);

// Challenge Area
// create new function with multiple arguments with defaults
// tip calculator
// A 25% tip on $40 would be $10
let getTip = function(bill, tipPercent = 0.2) {
  let percent = tipPercent * 100;
  let tip = bill * tipPercent;
  return `A ${percent}% tip on a $${bill} would be $${tip}.`;
  // return `A ${tipPercent * 100}% tip on $${bill} would be $${bill * tipPercent}`;
};

let tip = getTip(35, 0.25);
console.log(tip);

let tip2 = getTip(40);
console.log(tip2);
console.log(``);

// Template Strings
let name = "Shanay";
let age = 30;
console.log(`Hey, my name is ${name}! I am ${age} years old.`);

// Challenge Area
console.log();
