// Function - input (argument), code, output (return value)

let greetUser = function() {
  console.log('Welcome user!');
};

greetUser();
greetUser();
greetUser();

let square = function(num) {
  let result = num * num;
  return result;
};

// let square = num => num * num;

let value = square(3);
let otherValue = square(10);

console.log(value);
console.log(otherValue);

// Challenge Area
// create a function called convertFahrenheitToCelcius

// Fahrenheit to Celcius conversion
let convertFahrenheitToCelcius = function(fahrenheit) {
  let celcius = (fahrenheit - 32) * (5 / 9);
  return celcius;
};

let celc1 = convertFahrenheitToCelcius(32);
let celc2 = convertFahrenheitToCelcius(68);

console.log(celc1);
console.log(celc2);

// Fahrenheit to Kelvin conversion
let convertFahrenheitToKelvin = function(fahrenheit) {
  let kelvin = (fahrenheit + 459.67) * (5 / 9);
  return kelvin;
};

let kelv1 = convertFahrenheitToKelvin(32);
let kelv2 = convertFahrenheitToKelvin(68);

console.log(kelv1);
console.log(kelv2);
