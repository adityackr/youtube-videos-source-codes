// How to clone an array

/**
 * slice() [x]
 * rest parameter (...) [x]
 * Array.from()
 * map()
 * JSON.parse and JSON.stringify
 * concat()
 * structuredClone()
 */

// const clonedArr = (array) => array.slice(0);
// const clonedArr = (array) => [...array];
// const clonedArr = (array) => Array.from(array);
// const clonedArr = (array) => array.map((item) => item);
// const clonedArr = (array) => JSON.parse(JSON.stringify(array));
// const clonedArr = (array) => array.concat([]);
const clonedArr = (array) => structuredClone(array);

const arr1 = [1, 2, 3, 4];
const arr2 = clonedArr(arr1);
console.log('arr1', arr1);
console.log('arr2', arr2);
arr2.push(5);
console.log('arr1', arr1);
console.log('arr2', arr2);
// deep copy
// shallow copy
