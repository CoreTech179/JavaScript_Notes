// Basically JS array is an object that represents a collection of similar type of elements

// Creating an array with literals
const persons = ["Ram","Sita","Gita","Vishal"];

// we can access the array elements in backward direction using .at() method in js (i.e -1, -2, -3, .....)

console.log(persons.at(-1));

console.log(typeof persons);

// Iterable --> object where you can use for-of or for-in loop
// Array like object --> any object with length peoperty and use indexes to access the items is known as array of object


// Creating an array with Array constructor

let fruits = new Array('apple','banana','mango');
console.log(fruits);


// Modifying elements in an array

fruits[1] = "orange";
console.log(fruits);

// Iterating over arrays

let array = [1,2,3,4,5,6,7];

// 1. For-of loop

for(let numbers of array){
    console.log(numbers);
}

// For in loop

for(let i in array){ // Where in means index 
    console.log(i);
}


// For Each loop 

// Syntax

// arrayName.forEach(
//     function (currentValue,index,arrayName){

//         // function body

//     },thisValue); // thisValue is optional 

// callback --> A function that will be called once for each element in the array
// currentValue--> The current element is being processed in the array



// For each using fat arrow function

// Syntax

// arrayName.forEach(
//     (currentElement,index,array) =>{

//     }, thisValue );



fruits.forEach((currentElement,index,array)=>{
    // console.log(`${currentElement} ${index}`);
    console.log(array);
});



// Map function --> basically .map() method creates an entire new array with the existing array and it doesn't hamper the original array


// The difference between for-Each method and map() method is that for-Each doesn't return anything. We can't return any value and store it to a variable but map() method can return values and we can store it into a variable

// Example using for-Each method

const myFruits = fruits.forEach((currentElement,index,fruits)=>{
    return `${currentElement} ${index}`;
});

console.log(myFruits); // output--> undefined


// using map method 

const myFruits2 = fruits.map((currentElement,index,fruits)=>{
    return `${currentElement} ${index}`;
});

console.log(myFruits2);



// Q. Double the values of the array elements using ForEach and map method

let array1 = [1,2,3,4];

array1.forEach((currentElement)=>{
    console.log(`${currentElement * 2}`);
});


// using map method
const myArray = array1.map((currentElement)=>{
    return `${currentElement * 2}`;
});

console.log(myArray);


// Insert, add, delete, replace elements in an array
// 1. push(): that adds one or more elemets to the end of an array.It also returns the new length of the array
// 2. pop(): that removes last element from the array.It returns the deleted element from the array
// 3. unshift(): that adds one or more elements to the beginning of the array.It also returns the new length of the array
// 4. shift() : that removes the first element of an array.It returns the deleted element from the array


// push method 
let array2 = [1,2,3,4]
console.log(array2.push(10));
console.log(array2);

// pop method;

array2.pop();
console.log(array2.pop());
console.log(array2);

// Using unshift method

console.log(fruits.unshift("Guava"));
console.log(fruits);

// Using shift method

console.log(fruits.shift());
console.log(fruits);


// If we want to add or remove anywhere in an element

// We have a method name splice() which changes the content of an array by removing or replacing existing elements or adding new elements in place.

// Syntax--> splice(startingIndex,deleteCount,item1,item2,.....); 

// DeleteCount = 0 means do not delete any data from the startingIndex but add the given element

fruits.splice(1,1,"grapes"); // here orange is removed and grape is added 
console.log(fruits);


// Searching and Filter in an array

// For Searching we have indexOf, lastIndexOf and Includes

const numbers = [1,2,3,4,5,6,7,8];

// indexOf --> Syntax = arrayName.indexOf(searchingElement,fromIndex);
// Basically indexOf will return the index number of the array if present or returns -1

console.log(numbers.indexOf(6));

// Using Includes method --> Basically it checks whether an array includes a particular element or not by returning either true or false

console.log(numbers.includes(5));

// lastIndexOf --> Syntax = arrayName.lastIndexOf(searchingElement,fromIndex);

console.log(numbers.lastIndexOf(5));


// Find method --> Basically find method is used to find the first element in an array only that satisfy the provided testing function. It only returns the first matching element or undefined if no element found.

const result = numbers.find((currentElemet,index,numbers)=>{
    return currentElemet > 3;
});

console.log(result);

// using Find Index method
const result2 = numbers.findIndex((currentElemet,index,numbers)=>{
    return currentElemet > 5;
});

console.log(result2);

// Filter method --> Baically this method will return all the array element that satisfy the given condition.

const result3 = numbers.filter((currentElement)=>{
    return currentElement>4;
});

console.log(result3);



// Q. Given an array of products where each product has a name and a price, write a function that uses the filter method to return an array containing all the products with a price less than or equals to 500.

const products = [

    {name:"Laptop",price:1200},

    {name:"Phone",price: 800},

    {name:"Tablet",price:300},

    {name:"Smartwatch",price:150},

];

const filterProducts = products.filter((currentElement)=>{
    return currentElement.price <=500;
});

console.log(filterProducts);


// Sorting an array

fruits.sort();
console.log(fruits);


// Sorting an array from big number to small number

const numberValues = [2,4,3,1,5,8,6,7];

numberValues.sort((a,b)=>{
    if(a>b){
        return -1; // return -1 means do not switch the orders
    }else{
        return 1; // return 1 means switch the orders
    }
});

console.log(numberValues);
