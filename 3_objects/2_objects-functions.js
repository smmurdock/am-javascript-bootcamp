let myBook = {
  title: "1984",
  author: "George Orwell",
  pageCount: 326
};

let otherBook = {
  title: "A People's History",
  author: "Howard Zinn",
  pageCount: 723
};

let getSummary = function(book) {
  return {
    summary: `${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long`
  };
};

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);
console.log(bookSummary.pageCountSummary);

// Challenge area
// create function - take fahrenheit in, return object with all three conversions
// Formulas
//   let celcius = (fahrenheit - 32) * (5 / 9);
//   console.log(celcius);

//   let kelvin = (fahrenheit + 459.67) * (5 / 9);
//   console.log(kelvin);

let convertFahrenheit = function(fahrenheit) {
  return {
    fahrenheit: fahrenheit,
    celcius: (fahrenheit - 32) * (5 / 9),
    kelvin: (fahrenheit + 459.67) * (5 / 9)
  };
};

let tempSummary = convertFahrenheit(74);
console.log(tempSummary);
console.log(tempSummary.celcius);
