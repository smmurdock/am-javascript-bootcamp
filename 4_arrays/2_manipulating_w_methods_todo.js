// Manipulating Arrays with Methods - Challenge Area

let todos = [
  'Learn video editing',
  'Learn array basics',
  'Finish Frontend Masters: Introduction to HTML',
  '3.4 Brand Yourself Presentation: First Draft',
  '4.4 Brand Yourself Presentation: Final Draft'
];

// Delete the third item
console.log(todos.splice(2, 1));
todos.splice(2, 1);

// Add a new todo to the end
console.log(todos.push('Watch The Office'));
todos.push('Watch the Office');

// Remove the first item from the list
console.log(todos.shift());
todos.shift();

console.log(todos);
