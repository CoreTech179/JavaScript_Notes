// What is Functions?
// Basically it is a block of reuseable code that performs a specific task is known as functions.

// Syntax (Declaration)

// function functionName (parameters){
//     // code to be executed (function body)

//     // return result; //optional return statement
// }

// functionName(Argument); // Invocation



function addition(a,b){
    return a + b;
}

var a = 10, b=20; // multiple variable declaration in one go

var sum1 = addition(a,b);
console.log("Sum of 1st Student = "+sum1);

var a1 = 12, b1=32;
var sum2 = addition(a1,b1);
console.log("Sum of 2nd Student = "+sum2);

// Basically here we are performing the same operations repetedly without writing the same line of code



// Function Declaration

function greet(){
    console.log("This is function");
}

// Function Invocation
greet();


// Function Expression in JS--> Basically here we are assign an entire function to a specific variable 

var result = function multiply(a,b){
    return a * b;
}

console.log(result(1,2));


// Anonymous function --> Basically it is a function without any name and we can't call it simply. we can only able to call the anonymous function when it is only assigned to a variable

var getResult = function (a,b){
    return a / b;
}

console.log(getResult(5,3).toFixed(3));


// IIFE--> Immediately Involked function expression is a js function that is defined and executed immediately after its creation.

// Syntax

// (function(parameters){
//     // Code to be Executed
// })(arguments);


(function(a,b){
    console.log(a / b);
})(3,5);