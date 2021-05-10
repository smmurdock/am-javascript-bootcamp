const sqaure = (num) => num * num;

const squareLong = (num) => {
	return num * num;
};

console.log(square(5));
console.log(squareLong(5));

const people = [
	{
		name: 'Andrew',
		age: 27
	},
	{
		name: 'Vikram',
		age: 31
	},
	{
		name: 'Jess',
		age: 22
	}
];

// const under30 = people.filter(function(person) {
// 	return person.age < 30;
// });

const under30 = people.filter((person) => person.age < 30);
console.log(under30);

const person = people.find((person) => people.age === 22);
console.log(person);
