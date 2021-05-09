// Global Scope (convertFahrenheitToCelcius, celc1, celc2)
//   Local Scope (fahrenheit, celcius)
//     Local Scope (isFreezing)

// Fahrenheit to Celcius conversion
let convertFahrenheitToCelcius = function(fahrenheit) {
  let celcius = (fahrenheit - 32) * (5 / 9);

  if (celcius <= 0) {
    let isFreezing = true;
  }

  return celcius;
};

let celc1 = convertFahrenheitToCelcius(32);
let celc2 = convertFahrenheitToCelcius(68);

console.log(celc1);
console.log(celc2);
