// Looping Over Arrays - Lesson
const notes = ['Note 1', 'Note 2', 'Note 3'];

// passing a function into a function is a callback function
// notes.forEach(function() {
//   console.log('testing123');
// });

// use of parameter 1
notes.forEach(function(item) {
  console.log(item);
});
// use of parameter 2
notes.forEach(function(item, index) {
  console.log(index, item);
});

console.log(notes.length);
console.log(notes);
