
const add = function(a,b) {
	console.log(arguments);
	return a + b;
}
console.log(add(3,4, 5));

const addArrow = (a,b) => {
	// console.log(arguments);
	return a + b;
}
console.log(addArrow(4,5));

const user = {
	name: 'Rajendrasinh',
	cities: ['Vadodara', 'Rajkot'],
	printPlacesLived() {
		return this.cities.map( (city) => {
			return this.name + 'has lived in ' + city + '!';
		})
	}
}

console.log(user.printPlacesLived());

const multiplier = {
	numbers: [10, 7, 15],
	multiplyBy: 4,
	multiply() {
		return this.numbers.map((number) => number * this.multiplyBy);
	}
}
console.log(multiplier.multiply());