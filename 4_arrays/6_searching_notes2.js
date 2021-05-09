// Searcing Arrays - Part 2 - Lesson
const notes = [
  { title: 'My next trip', body: 'I would like to go to Spain' },
  { title: 'Habits to work on', body: 'Exercise' },
  { title: 'Office modification', body: 'Get a three-monitor mount' }
];

// findIndex()
// returns undefined if not found
const findNote1 = function(notes, noteTitle) {
  const index = notes.findIndex(function(note) {
    return note.title.toLowerCase() === noteTitle.toLowerCase();
  });
  return notes[index];
};

// find()
// returns undefined if not found
const findNote2 = function(notes, noteTitle) {
  return notes.find(function(note) {
    return note.title.toLowerCase() === noteTitle.toLowerCase();
  });
};

const note1 = findNote1(notes, 'Office modification');
console.log(note1);
const note2 = findNote2(notes, 'Office modification');
console.log(note2);

// console.log(notes.length);
// console.log(notes);
