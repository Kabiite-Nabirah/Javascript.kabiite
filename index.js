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

// Functions
// Functions are reusable blocks of code that perform a specific task. They can take parameters and return values.

// Function declaration // we use the function keyword to declare a function

function functionName() {
    // code to be executed
    return parameter; // returning the parameter
}

function funcWithParameters(parameter1, parameter2, parameter3) {
    // code to be executed
    return parameter1 + parameter2 + parameter3; // returning the sum of the parameters
}

// Working example of a function
function returnSomeValue() {
    let value = "This is my first function in JavaScript";

    console.log(value);
}

 returnSomeValue(); //This is how you call a function to excute the code inside it

 function returnParameter(parameter) {
    return parameter;
 }

 //console.log(returnParameter("Hello, this is my second function in Javascript"));
 const result = returnParameter("Hello, this is my second function in Javascript");
 console.log(result);

 function addNumbers(x,y) {
     return x + y;
 }
 const sum = addNumbers(4, 5);
 console.log(sum);


//Assignment 1. Grading math scores, (An Array called scores containing objects with each object having a name and scoring)
//loops help us to look through an Array and return a specific item

let scores = [
    {name: "Annet " , score: 85},
    {name: "Justine " , score: 63},
    {name: "Samuel " , score: 75},
    {name: "Martin " , score: 57},
    {name: "Resy " , score: 39},
    {name: "Liz " , score: 95}
]

scores. forEach(student => {
    let grade;

    if (student.score >= 90) {
        grade = "A"
    } else if (student.score >= 80) {
        grade = "B"
    } else if (student.score >= 70) {
        grade = "C"
    } else if (student.score >= 60) {
        grade = "D"
    } else if (student.score >= 50) {
        grade = "E"
    } else if (student.score >= 40) {
        grade = "F"
    }

    console.log(student.name + "And my grade is;" + grade)
})



    // if (score>=90) {console.log(scores.sore["D1"])}
    // else if (scores >= 80) {console.log(scores.score["D2"])}
    // else if (scores >= 70) {console.log(scores.score["C3"])}
    // else if (scores >= 60) {console.log(scores.score["C4"])}
    // else if (scores >= 50) {console.log(scores.score["E"])}
    // else if (scores >= 40) {console.log(scores.score["F"])}


    // Arrow Functions
    // Arrow functions are a more concise way to write functions in JavaScript.
    // They are often used for short, simple functions.

    // Traditional function expression
    const traditionalFunction = function() {
        console.log("This is a traditional function");
    }
    traditionalFunction();

    function anotherTraditionalFunction() {
        console.log("This is another traditional function");
    }
    anotherTraditionalFunction();

    // Arrow function expression
    const arrowFunc = () => {
        console.log("This is an arrow function");
    }
    arrowFunc();

    const add = (a, b) => {
        console.log(a + b);
    }
    add(3,4)

    // JSON (JavaScript Object Notation)

    // JavaScript Object
    const task = {
        id: 1,
        title: "Complete JavaScript assignment",
        completed: false
    }
    console.log(task);

    // JSON string
    const taskJSON = JSON.stringify(task);
    console.log(taskJSON);

    // Parsing JSON string back to JavaScript Object
    const parsedTask = JSON.parse(taskJSON);
    console.log(parsedTask);

    // Local storage
    // Storing data in local storage
    localStorage.setItem("Name", "Kabiite Nabirah");

    // Restriving data from local storage
    const nameFromStorage = localStorage.getItem("Name");
    console.log("Name from local storage: ", nameFromStorage);

    const taskFromStorage = localStorage.getItem("task")
    console.log(taskFromStorage);