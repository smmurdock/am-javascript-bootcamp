let myBook = {
  title: "1984",
  author: "George Orwell",
  pageCount: 326
};

console.log(myBook);
console.log(myBook.title);
console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = "Animal Farm";
console.log(`${myBook.title} by ${myBook.author}`);

// Challenge Area
// person - first name, age, location

let person = {
  name: "Shanay",
  age: 30,
  location: "Tallahassee, FL"
};

// Andrew is 27 and lives in Philadelphia
console.log(`${person.name} is ${person.age} and lives in ${person.location}`);

// Increase age by 1 and print message again
person.age += 1;
console.log(`${person.name} is ${person.age} and lives in ${person.location}`);
