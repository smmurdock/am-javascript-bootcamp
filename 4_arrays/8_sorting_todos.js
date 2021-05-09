// Sorting Arrays - Challenge (Todos)
const todos = [
  { text: 'Learn video editing', completed: true },
  { text: 'Learn array basics', completed: true },
  { text: 'Finish Udacity: JavaScript and the DOM', completed: false },
  { text: 'Finish Udacity: Interacting with Databases', completed: false },
  { text: 'Finish Progress Check 2', completed: false },
  { text: 'Finish Assignment: Developing a Solution', completed: false }
];

// sort by completed status
const sortTodos = function(todos) {
  todos.sort(function(a, b) {
    if (!a.completed && b.completed) {
      return -1;
    } else if (!b.completed && a.completed) {
      return 1;
    } else {
      return 0;
    }
  });
};

sortTodos(todos);
console.log(todos);
