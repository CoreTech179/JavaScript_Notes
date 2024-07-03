// List of useful fetures in ES8 are

// 1. Rest / spread operator
// 2. Promise.prototype.finally() || we will see later when we jump to promises in javaScript

// Basically ES6  introduced a concept of rest element while working with array destructuring

const numbers = [1,2,3,4,5];
[first,second, ...elements] = numbers;
console.log(elements);


// It introduces the same for objects also
const students = {
    name: "John",
    age: 20,
    isStudent: false
};

const {name, ...others} = students;
console.log(name);
console.log(others);


// Combining 2 objects with spread operator

const obj1 = {a:1,b:2,c:3};
const obj2 = {c:4,d:5,e:7};

const newObj = {...obj1, ...obj2};
console.log(newObj);