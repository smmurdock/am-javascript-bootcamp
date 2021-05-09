let isAccountLocked = false;
let userRole = 'user'; // either 'user' or 'admin'

// if (isAccountLocked) {
//   console.log("Account is locked.");
// } else {
//   console.log("Welcome!");
// }

if (isAccountLocked) {
  console.log('Account is locked.');
} else if (userRole === 'admin') {
  console.log('Welcome, Admin!');
} else {
  console.log('Welcome!');
}

// Road A
// if (true) {
//   // this code runs
// } else if (false) {
//   // this code does not run
// } else {
//   // this code does not run
// }

// Road B
// if (false) {
//   // this code does not run
// } else if (true) {
//   // this code runs
// } else {
//   // this code does not run
// }

// Road C
// if (false) {
//   // this code does not run
// } else if (false) {
//   // this code does not run
// } else {
//   // this code runs
// }

// Challenge
let temp = 45;

if (temp <= 32) {
  console.log('It is freezing outside!');
} else if (temp >= 110) {
  console.log('It is way too hot outside. Consider staying inside!');
} else {
  console.log("It's fine outside. Enjoy the weather!");
}
