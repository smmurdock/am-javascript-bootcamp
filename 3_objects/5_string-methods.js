// focus on JavaScript's built-in methods

let name = 'Shanay Murdock';

// Length property
console.log(name.length); // 14

// Convert to uppercase
console.log(name.toUpperCase()); // SHANAY MURDOCK

// Convert to lowercase
console.log(name.toLowerCase()); // shanay murdock

// Includes method
let password = 'abc123password098';
console.log(password.includes('password')); // true

// Trim - removes extra spaces - sanitizes user-entered data
console.log(name.trim()); // Shanay Murdock

//Challenge Area
// isValidPassword
// only return true is length is more than 8 and doesn't contain password

let isValidPassword = function(password) {
  return password.length > 8 && !password.includes('password');
  // if (password.length > 8 && !password.includes("password")) {
  //   return true;
  // } else {
  //   return false;
  // }
};

console.log(isValidPassword('asdfp')); // false
console.log(isValidPassword('aabc123@@')); // true
console.log(isValidPassword('asdfpasdfpoijpassword')); // false
