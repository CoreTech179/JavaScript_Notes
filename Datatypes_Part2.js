// Concatenation in Javascript

// Basically it is used to merge 2 String using the + operator. + operator is also used as an arithmetic operator and also used to concat 2 Strings

const str1 = "Hello ";
const str2 = "World";

const concatString = str1 + str2;
console.log(concatString);

// Type coercion--> Basically it is a automatic conversion of values from one datatype to another is known as type coercion.

var sum1 = "5" + 10; // Here concatenation is happening
console.log(sum1);

var sum2 = "5" - 10; // Here js is automatically detecting that 5 - 10 = -5 although 5 is written in double quotes
console.log(sum2);

var substract1 = "John" - "Doe";
console.log(substract1); // output: NaN (i.e Not a Number)

console.log(true + true); // Here true = 1 therefore 1 + 1 = 2

console.log(false + true); // Here true = 1 and false = 0 therefore 1 + 0 = 1

console.log(false - true); //  Here true = 1 and false = 0 therefore 0 - 1 = -1