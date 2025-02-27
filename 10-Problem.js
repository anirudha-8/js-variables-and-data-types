// 10-Problem statement - Use const to create an array. Try modifying the array and observe the error.

const numbers = [1, 2, 3, 4];

console.log(`The array elements are: ${numbers}`);

// Modifying elements inside the array (✅ Works fine)
numbers[0] = 8;
numbers.pop();
numbers.push(8);

// Trying to reassign the array (❌ Throws error)
// gives error --> "TypeError: Assignment to constant variable."
numbers = [5, 6, 7, 8];
