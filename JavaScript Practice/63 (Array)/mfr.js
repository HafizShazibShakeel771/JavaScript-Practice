let arr = [1,13,5,7,11];

/* Using forEach to iterate over the array
//
let newArr = [];
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    newArr.push(element * 2);
    
}
console.log(newArr); // Output: [2, 26, 10, 14, 22] 
*/

/* Using forEach method */
/*let newArr = arr.map((e,index, arr)=>*/
//OR 
let newArr = arr.map((e,index, arr)=>{
    return e * 2;
});
console.log(newArr); // Output: [2, 26, 10, 14, 22]

const greaterThanSeven = (e)=>{
    if (e>7) {
        return true;
    }
    return false;
}
console.log(arr.filter(greaterThanSeven));
// Output: [13, 11]

// Using reduce method
let arr2 = [1, 2, 3, 4, 5, 6];

const red = (a, b)=>{
    return a + b;
}
console.log(arr2.reduce(red)); // Output: 21

