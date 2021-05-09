//Searching Arrays - Lesson
const notes1 = ['Note 1', 'Note 2', 'Note 3'];

notes1.forEach(function(item, index) {
  console.log(index, item);
});

const notes = [
  { title: 'My next trip', body: 'I would like to go to Spain' },
  { title: 'Habits to work on', body: 'Exercise' },
  { title: 'Office modification', body: 'Get a three-monitor mount' }
];

console.log('length:', notes.length);
console.log(notes);

// indexOf()
console.log('indexOf():', notes.indexOf('Note 2')); // if it returns -1, it's not featured in the array

// comparing ojects
console.log({} === {}); // false - these are two separate points in memory
let someObject = {};
let otherObject = someObject;
console.log(someObject === otherObject); // true - reference to same point in memory

// findIndex()
const index = notes.findIndex(function(note, index) {
  console.log(note);
  return note.title === 'Habits to work on';
});

console.log(index); // 1 - in this case, it only prints as far as getting to the index and then stops running the function
