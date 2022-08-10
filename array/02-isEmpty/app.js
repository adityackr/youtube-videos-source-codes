// isEmpty(5) -> 'This is not an array. Please enter an array.'
// isEmpty([]) -> true
// isEmpty([1, 2, 3]) -> false

// function isEmpty(value) {
// 	if (Array.isArray(value)) {
// 		return value.length === 0;
// 	} else {
// 		return 'This is not an array. Please enter an array.';
// 	}
// }

const isEmpty = (value) =>
	Array.isArray(value)
		? value.length === 0
		: 'This is not an array. Please enter an array.';

console.log(isEmpty(5));
console.log(isEmpty([1, 2, 3]));
console.log(isEmpty([]));
