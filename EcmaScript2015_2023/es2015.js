// Modern JavaScript (Object Properties)

// let name = "John";
// let age = 30;

// Traditional way

// let person = {name:name,age:age};
// console.log(person);

// Modern way --> It says tat if the key and value is having the same name then we can use a shorthand property

// const persons = {name,age};
// console.log(persons);


// Destructuring in javaScript --> Baically it is a way to to extract values from the arrays or objects and assign them to variables in a concise and readable manner

// const numbers = [10,20,30];

// Traditional Way

// let first = numbers[0];
// console.log(first);

// Modern way

// const [first,second,third] = numbers; // where 10 is assigned to variable "first", 20 is assigned to variable "second" and 30 is assigned to variable "third"

// console.log(first,second,third); 

// Note: we can ignore elements also

// const [ , ,third] = numbers;
// console.log(third);


// Destructuring Objects

const user = {name:"John",age:30};

// Traditional Way

// const myName = user.name;
// console.log(myName);

// Modern way

// const {name,age} = user; // here property name of the object must be same while destructuring 
// console.log(name,age);


// Renaming properties
// Syntax

// keyword {propertyName:customVariableName,propertyName} = originalObjectName;

// const {name:fullName,age} = user;

// console.log(fullName);



// SPREAD OPERATOR --> JavaScript es6 introduced the spread operator. The Syntax is 3 dots (...) followed by array

// 1. Copying an array

// const fruits = ["apple","mango","banana","guava"];
// let copiedFruits = [...fruits];
// console.log(copiedFruits);


// 2. Combining multiple arrays
const arr1 = [1,2,3];
const arr2 = [4,5,6];

const combinedArray = [...arr1 , ...arr2];
console.log(combinedArray);


// 3. Adding Elements to the existing array

const fruits = ["apple","mango","banana","guava"];
fruits.push(...["orange","pineapple"]); // here ... represents previous values of the array + new element
console.log(fruits);


// One more use case is that it when you spread a string using the spread syntax (...) then it converts the string into an array of its indivisual character

// Traditional Way

const str = "INDIA";
console.log(str.split(""));

// Modern way

console.log([...str]);

// Rest Parameters --> Basically the Rest parameter syntax allows a function to accept many arguments in the form of an array by providing a more flexible way to work with functions that can accept varying number of arguments


// Traditioanl way

// function add(a,b,c,d){
//     return a + b + c + d;
// }

// console.log(add(1,2,3,4));


// Modern way

function add(...numbers){
    return numbers.reduce((accumulator,currValue)=>(accumulator += currValue),0);
}   

console.log(add(1,2,3));

// Reduce method: Basically it is used to reduce the array into a single number (like by adding all the elements of the array we find out the total sum of the array).

// Syntax 

// arrayName.reduce((accumulator,currentValue)=>{ (accumulator += currrentValue) },startingIndexOfArray);

// If we dont provide the startingIndexOfArray then by default initial value is set to 0 (i.e. Starting index of the array)

