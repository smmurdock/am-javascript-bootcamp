// Filtering Arrays - Challenge Area (Todo)
const todos = [
  { text: 'Learn video editing', completed: true },
  { text: 'Learn array basics', completed: true },
  { text: 'Finish Udacity: JavaScript and the DOM', completed: false },
  { text: 'Finish Udacity: Interacting with Databases', completed: false },
  { text: 'Finish Progress Check 2', completed: false },
  { text: 'Finish Assignment: Developing a Solution', completed: false }
];

// just the todos that have to be done yet (completed value of false)
const getThingsToDo = function(todos) {
  return todos.filter(function(todo) {
    return todo.completed === false;
  });
};

console.log(getThingsToDo(todos));
