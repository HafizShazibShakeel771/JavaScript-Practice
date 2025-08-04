console.log("This is String Tutorials");
// String is a sequence of characters
let a = "Shazib";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
//console.log(a[6]); // undefined, as there is no 7th character

// String length
console.log(a.length);

let real_name = "Shazib";
let friend = "Ali";

// Concatenation of strings
console.log("His name is " + real_name + " his a friend name is " + friend);
console.log(`His name is ${real_name} his a friend name is ${friend}`); // Template Literals

let b = "Arham";

console.log(b.toUpperCase()); // Convert to uppercase
console.log(b.toLowerCase()); // Convert to lowercase
console.log(b.length); // Length of the string
console.log(b.slice(0, 3)); // Slice the string from index 0 to 3

// Slice the string
let c = "Shazib";
console.log(c.slice(0, 5)); // Slice the string from index 0 to 5
console.log(c.slice(2, 5)); // Slice the string from index 2 to 5

// Replace a part of the string
let d = "Shazib";
console.log(d.replace("Sh", "Ar")); // Replace "Sh" with "Ar"

//concatenate two strings
let e = "Usama";
console.log(e.concat(" Talha")); // Concatenate with a space
console.log(e.concat(d)); // Concatenate with another string
console.log(e.concat(d, "Talha")); // Concatenate two strings
// Split a string into an array

console.log(b);