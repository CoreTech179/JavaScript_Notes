// ES8 Introduces new features and they are 

// 1. String Padding using padStart() method & padEnd() method

// 2. Object.values() || already Done previously in Objects

// 3. Object.entries() || already Done previously in Objects

// 4. Trailing commas in function parameters lists and calls --> Not import that much

// 5. Async Function || will see in Async and wait 


// padStart(NoOfSpace,toAddString): Basically it is a way to add extra characters (like spaces ) to a given string to make it a specific length from staring of the String. || NoOfSpace should not be less than the String length

const myName = "John";
// Using padStart()
const paddedName = myName.padStart(15,"*");

console.log(paddedName);

console.log("Length of the String before padding extra space",myName.length);
console.log("Length of the String after padding extra space",paddedName.length);

// Using padEnd(noOfSpace,toAddString)

const paddedNameEnd = myName.padEnd(15,"*");
console.log(paddedNameEnd);
console.log("length of the String after padding extra space at the end of the String",paddedNameEnd.length);

