// Filtering Arrays - Lesson (Notes)
const notes = [
  { title: 'My next trip', body: 'I would like to go to Spain' },
  { title: 'Habits to work on', body: 'Exercise' },
  { title: 'Office modification', body: 'Get a three-monitor mount' }
];

const findNote = function(notes, noteTitle) {
  return notes.find(function(note) {
    return note.title.toLowerCase() === noteTitle.toLowerCase();
  });
};

const findNotes = function(notes, query) {
  return notes.filter(function(note) {
    const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
    const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
    return isTitleMatch || isBodyMatch;
  });
};

console.log(findNotes(notes, 'work'));
