// Looping Over Arrays - Challenge Area
let todos = [
  'Learn video editing',
  'Learn array basics',
  'Finish Frontend Masters: Introduction to HTML',
  '3.4 Brand Yourself Presentation: First Draft',
  '4.4 Brand Yourself Presentation: Final Draft'
];

// Print the items with a correct index
console.log(`You have ${todos.length} todos!`);
todos.forEach(function(todo, index) {
  console.log(index + 1, todo);
});
