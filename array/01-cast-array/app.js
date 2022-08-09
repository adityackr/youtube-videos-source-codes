// How to cast a value as an array

// Input -> Output
// 1 -> [1]
// [1, 2, 3] -> [1, 2, 3]

/**
 * * What JS method will you learn in this video?
 * - isArray method
 * - Arrow function
 * - ternary operator
 */
// function castArray(value) {
// 	if (Array.isArray(value)) {
// 		return value;
// 	} else {
// 		return [value];
// 	}
// }

const castArray = (value) => (Array.isArray(value) ? value : [value]);

console.log(castArray(1));
console.log(castArray([1, 2, 3]));
