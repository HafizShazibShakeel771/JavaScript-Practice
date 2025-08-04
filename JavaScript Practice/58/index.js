
/*function parameter is a variable in the function definition*/
/* function nice(name) {
    console.log("Hello, " + name + "you are nice!");
    console.log("Hello, " + name + "you nice!");
    console.log("Hello, " + name + "you are good nice!");
    console.log("Hello, " + name + "you course is good to nice!");
}
nice("John"); // Call the function with a specific name
*/

/*example jaisa k name hai to hmay function (parameter (name)) k hissab sy call karte waqt name pass karna hota bar bar iss lye hm function use krty k aik hi dafa naem use kr k function pass kiya jay*/

/* console.log("Hello, shazib you are nice!");
   console.log("Hello, shazib you nice!");
   console.log("Hello,shazib you are good nice!");
   console.log("Hello,shazib you course is good to nice!");
   */

//function parameter is a variable in the function definition

// Function with parameters
/*
function sum(a, b) { // c is an optional parameter with a default value
    return a + b;
} 
*/

// This function takes two parameters and returns their sum

/*function sum(a, b, c = 3) { // c is an optional parameter with a default value
    return a + b + c;
}

result1 = sum(3, 5); // Call the function with specific arguments
result2 = sum(7, 5);
result3 = sum(3, 13);

console.log("The sum of thease number: ", result1);
console.log("The sum of thease number: ", result2);
console.log("The sum of thease number: ", result3);
*/

/*
const func1 = (x) => {
    console.log("This is a arrow function: " + x);
}

func1(34);
func1(66);
func1(84);
*/
 
//Function with a parameter

const sayHello = name => {
    return "Hello, " + name + "!";
}
console.log(sayHello("Ali"));
console.log(sayHello("Sara"));