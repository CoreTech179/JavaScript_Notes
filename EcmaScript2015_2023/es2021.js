// ES12

// 1. .replaceAll(oldString,newString): Basically it replaces the the ocurrance of the specified old string with new the new String in a given string

let str = "Hello world, Hello Hi";
let newString = str.replaceAll("Hello","Hi");
console.log(newString);



// Logical OR-Assignment Operator ( ||= ): This operator assigns the value of the right hand operand to its left hand operand if the left hand operand evaluates to a falsy value (0 or undefined) otherwise it leavs the left-hand operand unchanged.

let x = 10;
x = x ||= 20; 
console.log(x);


// Logical And Assignment Operator (&&=): This operator assigns the value of the right hand operand to its left hand operand if the left hand operand evaluates to a true value. Otherwise it leaves the left-hand operand unchanged.

let y = 10;
y = y &&= 40;
console.log(y);