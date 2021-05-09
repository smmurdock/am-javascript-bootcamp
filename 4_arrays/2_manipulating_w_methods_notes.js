//Manipulating Arrays with Methods - Lesson
const notes = ['Note 1', 'Note 2', 'Note 3'];
console.log(notes);
// Push and Pop - end of the array
notes.pop(); // returns a value; can be stored
console.log(notes);
notes.push('My new note'); // adds value to end of array
console.log(notes.length);
console.log(notes);

// Shift and Unshift - beginning of the array
notes.shift(); // removes the first item in the array
console.log(notes);
notes.unshift('New Note 1');
console.log(notes.length);
console.log(notes);

// Splices
// array.splice(start, end(exclusive), replacement item (optional))
notes.splice(1, 2);
notes.splice(1, 1);
console.log(notes);

// Replacing values of existing items
notes[2] = 'This is now the new note 3';
console.log(notes);
