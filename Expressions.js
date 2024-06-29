// Expressions and Operators in JS

// 1. Assignment Operator ( = )
var myNumber = 15;

// 2. Arithmetic Operators ( + , - , / , * , % )

console.log(2 + 5);

console.log(2 - 5);

console.log( 3 / 5);

console.log(6 * 2);

console.log(7 % 5);

// Tricky Questions
const result = "hello" / 2;
console.log(result); // output--> NaN because it is not valid

const result2 = 0.1 + 0.2;
console.log(result2.toFixed(2)); // Here toFixed function will give how many values you want to show after the decimal point

// String Operators ( + operator is used to concat 2 strings )

console.log("Hello " + "World");

// Comparison Operator

console.log(5 == 5); // Here we cannot write single equal operator because single equal operator is used for assignment operator.

// Strict Equal Operator (===)
console.log(5==="5"); //This triple equals operator check if 2 values are equal or not and also their datatypes are equal or not.

// Not equals Operator (!=)
console.log(5 != 10);

// greater than (>)

console.log(5>2);

// less than (<)

console.log(5<2);

// greater than and equals to (>=)
console.log(2>=2);

// less than and equals to (<=)
console.log(3<=2);


// Logical Operators in JS

// Logical AND ( && ), Logical OR ( || ) and Logical NOT ( ! )

// Logical AND ( && ) --> This will return true if both the conditions are true else it will return false

var n1 = 5;
var n2 = 10;

console.log(n1>5 && n2>0);

// Logical OR ( || ) --> This will return true if any one of the condition is true else it will return false

var n2 = 6;
var n3 = 10;

console.log(n2>3 || n3>20);

// Logical NOT ( ! ) --> This will return true if the operand is false and false if the operand is true

var isOpen = false;
console.log(!isOpen);

