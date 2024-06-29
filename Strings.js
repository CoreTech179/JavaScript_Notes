let str = "Hello world";

// Length of the String

console.log(str.length);

// Escape Sequence character --> If we want to use double quotes inside double quotes than we put \ before double quotes
let myText = "Hello 'I am John' and I am a \"Full Stack\" Developer"
console.log(myText);


// String Searching Methods --> indexOf, lastIndexOf
// Syntax
// indexOf(searchingString)
// lastIndexOf(searchingString,position)

// Using indexOf() method --> It only returns the index number for the 1st occurance of the String in the given String else it will return -1
let str1 = "John Doe";
console.log(str1.indexOf("Doe"));


// Converting every characters of the string into an element of the array using Array.from(String) method

let myStringArray = Array.from(str1);
console.log(myStringArray);


// lastIndexOf() methods is used to find out the last occurance of the specified String
// Syntax
// stringVariableName.lastIndexOf(searchString);
// stringVariableName.lastIndexOf(searchString,position);

// let text = "Hello welcome to JavaScript for Begineers";

// console.log(text.lastIndexOf("JavaScript"));


// Search() method --> Basically it searches a String and returns the index number where the 1st match is found or returns -1.

// let text = "Hello welcome to JavaScript for Begineers";

// console.log(text.search("welcome"));


// match() method --> Basically it returns an array of the matched values or null if no match found

let text = "Hello welcome to JavaScript for Begineers JavaScript";

console.log(text.match("welcome"));


// matchAll() method --> Basically it returns an iterator of all matches, providing an detailed information about each match or returns an empty iterator if no match. Basically here the js automatically converts the normal text to  regular expression and also adds global flag -g at the end also.

// let matchResult = text.matchAll("JavaScript");
// console.log(matchResult);

// for(let item of matchResult){
//     console.log(item);
// }


// includes() method --> Basically it returns true if it contains the specified values or false otherwise

// let text2 = "Hello welcome to JS tutorial";
// console.log(text2.includes('JS'));


// startsWith() --> Basically this method returns true if a string begins with specified value. Otherwise it returns false

let text2 = "Hello welcome to JS tutorial";

console.log(text2.startsWith("Hello")); // output is true because the String is starting with Hello


// endsWith() method --> Basically it returns true if a string ends with specified value or returns false

console.log(text2.endsWith('tutorial')); // true because the string ends with tutorial



// Extracting String parts


// 1. slice() method extracts a part of a string and returns the extracted part in a new string
// Syntax
// slice(startPosition,endPosition); || endPosition is excluded

let myName = "John Doe";

console.log(myName.slice(3,6)); // output: n D


// 2. substring() method --> Basically it extracts a part of a string and returns the extracted part in a new String.
// Syntax
// substring(startPosition,endPosition) || endPosition is excluded

let myName2 = "John Doe";

console.log(myName2.substring(3)); // where it starts slicing from 3rd position and give the entire rest string if endposition is not given

console.log(myName2.substring(4,7)); // output:  Do



// Extracting String Characters

// 1. charAt(position) method --> Basically it returns a character at the specified position of a string

// 2. charCodeAt(position) method --> Basically it returns a character at the specified position of a string but this method returns a UTF-16 code (an Integer between 0 and 65535)

// 3. at(position) method




let mytext = "Welcome to javascript tutorial";

console.log(mytext.charAt(8));

console.log(myText.charCodeAt(12));



// ES2022 introduce new method .at(position) method --> Basically it returns the character at the specified position in a string. It retuns the same as charAt() method does. || where position can be positive or can be Negative

let mytext2 = "Javascript tutorial";

let result = mytext2.at(4);
console.log(result);


// replace(oldString,newString) method --> Basically replace method is used to replace a specified value with another value

const mystr = "Hello World";
console.log(mystr.replace("Hello","Javascript"));

// toUpperCase and toLowerCase method

const myStr = "javaScript";

console.log(myStr.toUpperCase());
console.log(myStr.toLowerCase());



// trim() method --> Basically it is used to remove white space from both ends of the String

const trimString = "          Hello        ";
console.log(trimString.trim());



// split(delimeter) method--> Basically split method is used to split the String into an array of substring based on the delimeter.

let splitString = "Apple,orange,mango,guava";
console.log(splitString.split(","));

// Array to String conversion using join() method

const arrayString = ["Apple","Mango","Guava","banana"];

console.log(arrayString.join());