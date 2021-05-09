const notes = [
  {
    title: 'my next trip',
    body: 'I would like to go to Spain'
  },
  {
    title: 'Habits to work on',
    body: 'Exercise. Eating a bit better.'
  },
  {
    title: 'Office modification',
    body: 'Get a new seat'
  }
];

const filters = {
  searchText: ''
};

const renderNotes = function(notes, filters) {
  const filteredNotes = notes.filter(function(note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });

  document.querySelector('#notes').innerHTML = '';

  filteredNotes.forEach(function(note) {
    const noteEl = document.createElement('p');
    noteEl.textContent = note.title;
    document.querySelector('#notes').appendChild(noteEl);
  });
};

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', function() {
  console.log('Create a new note');
});

document.querySelector('#search-text').addEventListener('input', function(e) {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

// to be deleted later
document.querySelector('#for-fun').addEventListener('change', function(e) {
  console.log(e.target.checked);
});
