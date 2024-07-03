// List of added new features in ES10 are

// 1. Array.prototype.{flat,flatMap}
// 2. Object.fromEntries()
// 3. String.prototype.{trimStart,trimEnd}
// 4. Symbol.prototype.description || It is not important that much 
// 5. Optional Catch Binding


// Array.flat(noOfArrayYouWantToRemove) is a new method which is used to create a one-dimensional Array from a multi-dimensional array. || by default no of array removal is 1

// const array = [1,2,[3,4],5];
const array = [1,[2,[3,4]],5];
// const flatArray = array.flat();
const flatArray = array.flat(2);
console.log(flatArray);


// Array.flatMap(): Basically it is a method that combines flat() with map() that returns an entire new array with indivisual elements

const arrayName = ["my Name","is John","Doe"];

// const newArray = arrayName.map((currElemet,index,arrayName)=>{
//     return [...currElemet];
// }); 

// Output: [['m','y',' ','n','a','m','e'],['i','s',' ','J','o','h','n'],['D','o','e']]

const newArray = arrayName.flatMap((currElemet,index,arrayName)=>{
    return [...currElemet];
});

// Output: ['m','y',' ','n','a','m','e','i','s',' ','J','o','h','n','D','o','e']

console.log(newArray);


// Object.fromEntries(): Basically this method will revert back the converted array to its original object form after using the Object.entries() method

const obj = {
    name: "John",
    age: 30,
    isStudent: false,
};

let keyValueArray = Object.entries(obj);
console.log(keyValueArray);

// Output: [ [ 'name', 'John' ], [ 'age', 30 ], [ 'isStudent', false ] ]


let originalObject = Object.fromEntries(keyValueArray);
console.log(originalObject);

// Output: { name: 'John', age: 30, isStudent: false }


// using trimStart(): Basically it removes white space from the starting position of the original string

let trimStart = "                    Hello";
console.log(trimStart.length);
console.log(trimStart.trimStart().length);

// Using trimEnd(): Basically it remove white space from the ending position of the original string

let trimEnd = "hello               ";
console.log(trimEnd.length);
console.log(trimEnd.trimEnd().length);


// Optional catch Binding

// Traditional 

// try {
//     // Code to be executed
// } catch (e) {
//     // Handles error
// }

// New Introduced portion is that now we can ommit that (e) from the catch

// try{
//     // Code to be executed
// }catch{ 
//     // handles error
// }