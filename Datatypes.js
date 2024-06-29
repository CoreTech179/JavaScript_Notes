// Primitive Datatypes are --> String,Number,Boolean,Undefined,Null,Bigint,Symbol
// Object Datatypes are --> An object, An Array, A Date

// Number Datatype
var myNumber = 13;
console.log(myNumber);

// String Datatype can by either written in Double Quotes or Single Quotes it doesn't matter

var myString = "JavaScript";
console.log(myString);

// Boolean Datatype is either true or false

var isRaining = false;
var areYouAwesome = true;

console.log(isRaining);
console.log(areYouAwesome);

// Undefined variables are those datatypes which doesn't have any value or uninitialized

var name;
console.log(name);

// Null variable are those datatypes whose value is empty

var memories = null;
console.log(memories);

// Bigint Data

var bigNumber = 1234567891021542485769545213654875697n;
console.log(bigNumber);

// ParseInt and ParseFloat

// 1. parseInt --> Basically it is used to parse a string and convert it to an Integer (Whole number)

var myString = "42";
var myNumber = parseInt(myString);
console.log(myNumber);

// 2. parseFloat --> Basically it is used to parse a String and convert it into an Floating-point number
var myString2 = "43.5";
var myNumber2 = parseFloat(myString2);
console.log(myNumber2);