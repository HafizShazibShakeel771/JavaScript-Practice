
console.log("Hey this is tutorail 55");

let a = 5;
// var a = 5;
let b = 6;
let c = "Shazib";
let _a = "Arham";
// var 55a = ""Ali"; // This line will cause an error due to invalid variable name 

// {
//     let a = 66; // This 'a' is block scoped
//     console.log(a) // This will log 66 
// }
// console.log(a); // This will log 5, the outer 'a' variable 
 

{
    let a = 66; // This 'a' is block scoped
    console.log(a) // This will log 66 
}
console.log(a);

// console.log(a + b);
// console.log(a + b + 8);
// console.log(c);
// console.log(_a);
// console.log(typeof a, typeof b, typeof c);

// const a1 = 6;
// a1 = a1 + 1; // This line will cause an error because a1 is a constant and cannot be reassigned

// Primitive Data Types
let x = "Shazib ";
let y = 22;
let z = 22.5;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r); 
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r);

// Objects Data Types 

let o = { 
    name: "Shazib",  // key: value pair
    age: 22,
    isActive: true
};
console.log(o);
o.salary = 50000; // Adding a new property to the object
console.log(o); 

