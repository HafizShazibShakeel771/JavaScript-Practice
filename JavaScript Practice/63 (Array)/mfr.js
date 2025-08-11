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


