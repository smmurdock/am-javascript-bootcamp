// Lexical scoping (Static Scope)
// Global Scope - defined outside of all code blocks
// Local Scopes - defined inside a code block

// In a scope you can access variables defined in that scope, or in any parent/ancestor scope

// Global Scope (varOne)
//   Local Scope (varTwo)
//     Local Scope (varFour)
//   Local Scope (varThree)

let varOne = "varOne"; // Global variable

if (true) {
  console.log(varOne);
  let varTwo = "varTwo"; // Local variable
  console.log(varTwo);

  if (true) {
    let varFour = "varFour";
  }
}

if (true) {
  let varThree = "varThree";
}

console.log(varTwo);
