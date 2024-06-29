// Basically the meaning the EcmaScript is that every year some new features is added to the js such that it makes the life of a programmer little bit easier

// Let Keyword: Basically the variables declared with let keyword are mutable, that means their values can be reassigned and also it is a block scope variable

var name = "john";
let name1 = "Doe";

// Here if we declare a same variable with var then it will not give an error and js will allow this. But if we use let keyword while declaring a varibale then if that particular variable is already declared it will give an error that this variable is already declared. 



// const Keyword: Basically the const keyword is used to declare the variable with block scope and once a value is assigned to a const variable it can't be reassigned

// const myFavColor = "Red";

// myFavColor = "Blue"; // Here we can't reassign to const variable
// console.log(myFavColor); 



// Block scope means 

// if(true){
//     let exampleName = "John"; // Here the scope of this exampleName variable is within the if block only but with var keyword the scope is global,not only a particular block
//     console.log(exampleName);
// }

// console.log(exampleName);




// Template Strings ( `` )
let firstName = "John";
let lastName = "Doe";

let fullName = `${firstName} ${lastName}`;
console.log(fullName);


// String Interpolation-->Basically it allows us to embed expressions directly within the string. They are enclosed in ${}

let age = 20;

let intro = `Hello I am John Doe and my age is ${age}`;
console.log(intro);


// Multiline String

let multilineString = `my name is John Doe.
I am 20 yr's old `;

console.log(multilineString);


// On practice Problem
let num = 10;
console.log(`5 * ${num} = ${5 * num}`);


// Default Parameters-->Basically if a argument is not provided when function is called, then the default parameter values are used.

// example
function add(a=10,b=20){ // This are default parameters with having default values
    return a + b;
}

console.log(add(a=5,b=15));



// Fat Arrow Function in JS

let result = function (a,b){
    console.log(`Sum of ${a} + ${b} is = ${a + b}`);
}

result(10,30);


// Modified function

let result1 = (a,b) => {
    console.log(`Sum of ${a} + ${b} is = ${a + b}`);
}

result1(50,60);


// If there is only one line of code then braces is also not needed

let result2 = (a,b) => console.log(`Sum of ${a} + ${b} is = ${a + b}`);

result2(100,200);


// Note: If there is only one parameter then the parenthesis can be omitted
// example

let square = a => console.log(`Square of ${a} is = ${a * a}`);

square(2);

// Note: if there are no parameters the we can use empty parenthesis

let greet = () => console.log(`I am an empty fat arrow fuction`);

greet();