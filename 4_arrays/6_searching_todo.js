// Searching Arrays - Challenge Area
// let todos = [
//   'Learn video editing',
//   'Learn array basics',
//   'Finish Frontend Masters: Introduction to HTML',
//   '3.4 Brand Yourself Presentation: First Draft',
//   '4.4 Brand Yourself Presentation: Final Draft'
// ];

// convert array to array of objects -> text
const todos = [
  { text: 'Learn video editing', completed: true },
  { text: 'Learn array basics', completed: true },
  { text: 'Finish Udacity: JavaScript and the DOM', completed: false },
  { text: 'Finish Udacity: Interacting with Databases', completed: false },
  { text: 'Finish Progress Check 2', completed: false },
  { text: 'Finish Assignment: Developing a Solution', completed: false }
];

// create a function that works with an array of objects; to remove a todo by text value
// function call:
// deleteTodo(todos, 'buy food') // - make search case insensitive
// doesn't need to return anything
const deleteTodo = function(todos, todoText) {
  const index = todos.findIndex(function(todo) {
    return todo.text.toLowerCase() === todoText.toLowerCase();
  });

  if (index > -1) {
    todos.splice(index, 1);
  }
};

deleteTodo(todos, 'Learn array basics');
deleteTodo;
console.log(todos);
