// Type Coercion - can coerce to a string, a number, or a boolean
// Booleans are most common use case because they have the fewest number of cases of unexpected behavior
// Avoid == loose equalty and use === strict equality instead

console.log('5' + 5); // 55
console.log('5' - 5); // 0
console.log(5 === 5); // true
console.log('5' == 5); // true
console.log('5' === 5); // false

console.log(typeof 123); // number
console.log(typeof '123'); // string

const value = true + 12;
const type = typeof value;
console.log(type); // number
console.log(value); // 13 because true coerces to 1 as a number value
