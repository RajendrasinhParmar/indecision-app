const square = function(x) {
	return x * x;
}
console.log(square(5));

/* const squareArrow = (x) => {
	return x * x;
} */

const squareArrow = (x) => x * x;

console.log(squareArrow(4));

const getFirstName = (name) => name.split(' ')[0];

console.log(getFirstName("Rajendrasinh Parmar"));