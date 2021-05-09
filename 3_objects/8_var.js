// var firstName = "Shanay";
// firstName = "Delaney";

// var firstName = "Connor";

// if (10 === 10) {
//   var firstName = "Connor";
// }

// const setName = function() {
//   var firstName = "Connor";
// };

// console.log(firstName);

// var can be overwritten without knowing it if using a more complex program
// var is function scoped, not block scoped - everything is the same scope rather than in a block-based scope unless it's created in a function

// let age;
// console.log(age);

// console.log(age);
// var age; // still shows as undefined even if age is called before defined

// console.log(age);
// var age = 10; // the var gets hoisted to the top but in this case it still shows as undefined even though there is a defined value

age = 10;
console.log(age); // 10
var age = 10;
// this one actually shows the value of the var before it's been declared due to hoisting
