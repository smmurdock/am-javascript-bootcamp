// Global (name)
//   Local (name)
//     Local
//   Local

// let name = "Shanay";

if (true) {
  // let name = "Amanda";

  if (true) {
    name = 'Ashley'; // leaked global: it was never specifically defined - avoid by defining it somewhere
    console.log(name);
  }
}

if (true) {
  console.log(name);
}
