let arr = [1, 2, 4, 5, 7];
// Adding elements to the array
arr[0] = 5666; // Change the first element to 5666
/*
console.log(arr, typeof arr); // Output: [5666, 2, 4, 5, 7] 'object'
console.log(arr.length); // Output: 7

// Adding more elements

console.log(arr[0]); // Output: 100
console.log(arr[2]); // Output: 2
console.log(arr[4]); // Output: 10
*/
// Accessing elements in the array
console.log(arr.toString()); // Output: "5666,2,4,5,7"
console.log(arr.join(" | ")); // Output: "5666 | 2 | 4 | 5 | 7"
// Converting to string

// Removing elements from the array
let n = [1, 2, 3, 4];
console.log(n); // Output: [1, 2, 3, 4]
n.pop(); // Removes the last element (4)
console.log(n); // Output: [1, 2, 3]

// Adding elements to the array
n.push(5); // Adds 5 to the end of the array
console.log(n); // Output: [1, 2, 3, 5]

// Using shift() to remove the first element
n.shift(); // Removes the first element (1)
console.log(n); // Output: [2, 3, 5]

// Using unshift() to add an element at the beginning
n.unshift(8); // Adds 0 to the beginning of the array
console.log(n); // Output: [8, 2, 3, 5]

// Deleting an element using delete
delete n[0]; // Deletes the first element (8)
console.log(n); // Output: [ <1 empty item>, 2, 3, 5 ]
console.log(n.length); // Output: 4

/*
// Concatenating arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];
let arr4 = arr1.concat(arr2, arr3); // Concatenates arr1 and arr2
console.log(arr4); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
*/

// Sorting an array
let a = [9, 8, 6];
console.log(a); // Output: [9, 8, 6]
a.sort(); // Sorts the array in ascending order
console.log(a); // Output: [6, 8, 9]

// Reversing an array
let b = [1, 2, 3, 4, 5];
console.log(b); // Output: [1, 2, 3, 4, 5]
b.reverse(); // Reverses the order of elements in the array
console.log(b); // Output: [5, 4, 3, 2, 1]

//splice() method
let c = [1, 2, 3, 4, 5];
console.log(c); // Output: [1, 2, 3, 4, 5]
c.splice(1, 2); // Removes 2 elements starting from index 1
console.log(c); // Output: [1, 4, 5]

// Splicing to add elements
console.log(c); // Output: [1, 4, 5]
c.splice(2, 1, 2); // Adds 2 at index 2 and removes 1 element
console.log(c); // Output: [1, 4, 2, 5]

// Splicing to add multiple elements
c.splice(1, 0, 3, 6); // Adds 3 and
// 6 at index 1 without removing any elements
console.log(c); // Output: [1, 3, 6, 4, 2, 5]


// slice() method
let d = [1, 2, 3, 4, 5];
console.log(d); // Output: [1, 2, 3, 4, 5];
// Slicing the array
let e = d.slice(1, 3); // Creates a new array with elements from index 1 to 2
console.log(e); // Output: [2, 3]

