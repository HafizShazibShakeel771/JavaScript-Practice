let a = [1, 93, 5, 6, 88];

// Using forEach to iterate over the array
/*
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element); // Output: 1, 93, 5, 6, 88    
}
*/

// Using forEach method
a.forEach((value, index, arr) => {
    console.log(value, index, arr);  
}); // Output: 1 0 [1, 93, 5, 6, 88] ... and so on for each element


// Using for...of loop
let obj = {
    a: 1,
    b: 2,
    c: 3,
}
for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(element); // Output: 1, 2, 3
    }
}
