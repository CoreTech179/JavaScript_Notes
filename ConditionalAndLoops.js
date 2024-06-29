
// Ternary Operator in JS

// Syntax --> condition ? expressionifTrue : expressionifFalse;

// Write a program in JS to check if the student is eleigible for Drive or not?

var age = 19;
console.log(age>=18?"Eligible to Drive ":"Not Eligible to Drive");


// If-elseIf-Else Statement

var temperature = 30;

if(temperature>=30){
    console.log("Sunny Whether");
}else if(temperature<30){
    console.log("Cloudy Whether");
}else{
    console.log("Possibility of Rain");
}


// Switch Statement in JS

// switch(Expression){
//     case value1:
//         break;
//     default:
//         break;
// }

var n1 = 2;
var n2 = 3;
var operator = "%";

switch(operator){
    case "+":
        console.log(n1 + n2);
        break;
    case "-":
        console.log(n1 - n2);
        break;
    case "*":
        console.log(n1 * n2);
        break;
    case "/":
        console.log(n1 / n2);
        break;
    case "%":
        console.log(n1 % n2);
        break;
    default:
        console.log("None of the Operator Matched");
        break;
}


// While Loop

// Syntax--> while(condition){ }

// Do-while loop 

// Syntax--> do{ }while(condtion);

// For loop

// Syntax --> for(initializer; condition; iteration){ }

// Create a table of 5

var number = 15;
for(var i=1;i<=10;i++){
    var result = number * i;
    console.log(number +" x "+i+" = "+result);
}

// User Input positive number using prompt function

// let positiveNumber;
// do{
//     let userInput = prompt("Enter a valid number:");
//     positiveNumber = parseFloat(userInput);

// }while(isNaN(positiveNumber) || positiveNumber<0);
// console.log("You have entered a Valid Positive number:"+positiveNumber);

// Making the for loop an infinite loop
// Syntax--> for(;;){ }

// Calcuate the sum of 1 to 10

let sum = 0;
for(let i=0;i<=10;i++){
    sum += i;
}
console.log(sum);

// Prime or not program
let num = 13;
var isPrime = true;
for(var i=2;i<num;i++){
    // Here we are starting the loop from 2 because if we start directly from 1 then any number can be divisible by 1 but except 1 we are checking the numbers those are less than the userInput number. And the moment if any number is divisible then that number is not a prime number. 
    if(num%2===0){
        isPrime = false;
        break;
    }
}

if(isPrime){
    console.log("Prime number");
}else{
    console.log("Not Prime number");
}

// Leap Year Program
var year = 2024;

if(year%4===0 && year%100!==0 || year%400===0){
    console.log("Leap Year");
}else{
    console.log("Not a Leap year");
}