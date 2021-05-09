const isRaining = true; // can't reassign const variable values
// let isRaining = true;
// isRaining = false;

const person = {
  age: 30
};

// person = {}; // will fail because the object itself can't be reassigned
person.age = 31; // is valid because we're just altering a property inside of the object

console.log(isRaining);
console.log(person);
