console.log("My name is Nabirah");

// Variables
// Declaring variables uses the var, let, or const keywords

// var is function-scoped and can be redeclared and updated
var name = "Nabirah";
console.log(name);
name = "Nabirah Kabiite";
console.log(name);

// let is block-scoped and can be updated but not redeclared
let age = 29;
console.log(age);
age = 18;
console.log("My age has changed because I am just a girl", age);

// const is block-scoped and cannot be updated or redeclared
const country = "Uganda";
console.log(country);
/*country = "Kenya"; // This will throw an error because const cannot be reassigned*/

// Data Types
// JavasScript has several data types including:
//1. String
let greeting = "Hello, How are you?"
console.log(greeting);
console.log(typeof greeting);

// 2. Number
let x = 10;
let y = "12"
// console.log(x);
console.log(y);
// console.log(typeof x);
console.log(typeof y);

// 3. Boolean
// 4. Undefined
// 5. Intentional nothing

// 6. Symbol
// Explanation of Symbol data type
// Mathematical Operators
let a = 5;
let b = 3;
console.log(a + b); // Addition
console.log(a - b); // Subtraction
console.log(a * b); // Multiplication
console.log(a / b); // Division
console.log(a % b); // Modulus
console.log(a ** b); // Exponentiation

// Conditionals in javaScript
// if statement
// definition of if statement
let condition = true;
let condition1 =false;
let condition2 = false;
let condition3 = true;

if (condition) {
    // code to be executed if condition is true
}

// if-else statement
// definition of if-else statement
if (condition) {
    // code to be executed if condition is true
} else {
    // code to be excuted if condition is false
}

// else-if statement
// definition of else if statement
if (condition1) {
    // code to be executed if condition is true
} else if (condition2) {
    // code to be executed if condition2 is true
} else if (condition3) {
    // code to be executed if condition1 and condition2 are false
} else {
    // code to be executed if all conditions are false
}


// Practice examples
let mark = 50;

if (mark > 69 ) {
    console.log("very good, you have passed the exam")

}

if (mark >= 70 ) {
    console.log("You have passed the exam")
} else {
    console.log("You have failed the exam")
}

// Comparison Operators
// 1. Equal to (==)
// 2. Not equal to (!=)
// 3. Strict equal to (===)
// 4. Strict not equal to (!==)
// 5. Greater than (>) 
// 6. Less than (<)
// 7. Greater than or equal to (>=)
// 8. Less than or equal to (<=)

// Arrays

[ "Volvo", "Benz", "Kia", "Toyota"]
[1, 2, 3, 4, 5]
//["Nabirah", 29, "Uganda", true, null, undefined,{ name: "John "}]


let cars = ["Volvo", "Ben", "Kia", "Toyota"];
console.log(cars); 
console.log(cars[0]) // Accessing the first element

let mixedArray = ["Nabirah", 29, "Uganda", true, null, undefined, { name: "Kabiite" }];
console.log(mixedArray);
console.log(mixedArray[6])

// Objects
{} // an empty object

let person = {
    name: "Nabirah",
    age: 29,
    country: "Uganda",
    isStudent: true,
    hobbies: ["swimming", "travelling"],
    address: {
        street: "Makamba  road",
        city: "Kampala",
        country: "Uganda"
    }

}
console.log(person);
console.log(person["name"]); // Accessing the name property
console.log(person.hobbies)
console.log(person.hobbies[1]) // Accessing the second hobby