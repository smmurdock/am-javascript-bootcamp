let temp = 45;

// if (temp >= 60) {
//   if (temp <= 90) {
//      code runs here
//   }
// }

// Logical And Operator - True if both sides are true. False otherwise
// Logical Or Operator - True if one side is true. False if both sides are false
if (temp >= 60 && temp <= 90) {
  console.log('It is pretty nice out!');
} else if (temp <= 0 || temp >= 120) {
  console.log('Do not go outside!');
} else {
  console.log('Eh. Do what you want.');
}

// Challenge area
let isGuestOneVegan = true;
let isGuestTwoVegan = false;

// Are both vegan? Offer up only vegan dishes.
// Is at least one guest vegan? Make sure to offer up some vegan options.
// Else, offer up anything on the menu,

if (isGuestOneVegan && isGuestTwoVegan) {
  console.log('We have some great vegan dishes available!');
} else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log('We have a variety of vegan and non-vegan dishes.');
} else {
  console.log('We have a great selection of dishes for you tonight!');
}
