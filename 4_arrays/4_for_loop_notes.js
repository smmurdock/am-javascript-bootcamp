// The For Loop - Lesson
// offers more flexibility than forEach, but forEach is specifically designed for arrays
const notes = ['Note 1', 'Note 2', 'Note 3'];

for (let i = 0; i < notes.length; i++) {
  console.log(`${i + 1}: ${notes[i]}`);
}

// Reverse through array
for (let count = notes.length - 1; count >= 0; count--) {
  console.log(notes[count]);
}
