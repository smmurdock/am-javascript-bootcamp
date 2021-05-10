// original code
// const getTip = (amount) => {
// 	return amount * 0.24;
// };

// const result = getTip(true);
// console.log(result);

// code using throw
const getTip = (amount) => {
	if (typeof amount === 'number') {
		return amount * 0.25;
	} else {
		throw Error('Argument must be a number');
	}
};

// const result = getTip(true);
// console.log(result);

// code using try/catch so that code doesn't crash
try {
	const result = getTip(10);
	console.log(result);
} catch (e) {
	console.log('catch block is running');
}
