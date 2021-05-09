// === is the Equality operator
// !== is the Not Equal operator
// < less than operator
// <= less than or equal to operator
// > greater than operator
// >= greater than or equal to operator

let temp = 45;
// let isFreezing = temp === 31;
isFreezing = temp <= 32;

// console.log(isFreezing);
// if (isFreezing) {
//   console.log("It is freezing outside!");
// }
if (temp <= 32) {
  console.log('It is freezing outside!');
}

if (temp >= 110) {
  console.log('It is way too hot outside. Consider staying inside!');
}

// Challenge - boolean
// offer discounts to people who are in certain age ranges
// < 7 discount
// > 65 discount

// Create age set to your age
let age = 30;

// Is child? 7 or under
let isChild = age <= 7;
// Is senior? 65 or older
let isSenior = age >= 65;

// Print both values
console.log(age);
console.log(isChild);
console.log(isSenior);

// Challenge: rewrite as if statement
age = 65;

// If 7 or under, print message for child pricing
if (age <= 7) {
  console.log('You get a discount for being 7 or younger.');
}

// If 65 or older, print message for senior discount
if (age >= 65) {
  console.log('You get a discount for being 65 or older.');
}
