// Basically objects is the fundamental part of the JavaScript,providing a way to to group related Data and functions together.
// In javaScript object is a collection of key-value pairs where each key is a string and each value can be any datatype including other objects.
// Objects have various methods and properties making them versatile for various use cases.

// Syntax--> obj = {}

// Creating an object
const product = {
    id: 1,
    pName: "laptop",
};

// another example

const person = {
    name: "John",
    age: 30,
    // isStudent: true,
    "is'Student":false,
    greet: ()=>{
        console.log("Welcome to objects");
    }
};


// Accessing Properties

// It can ben accessed by using dot notation or square brackets
console.log(person.age);
console.log(person.name);
// console.log(person.isStudent);


// In case if my key is written in this way
// "is'Student" then we have to access it using square brackets
console.log(person["is'Student"]);


// Adding and modifying properties --> Either you can add new properties or modify existing ones

person.job = "Student";
person.age = 22;

console.log(person);


// Accessing functions defined inside the object
person.greet();


// We can add dynamic keys inside the object

let idType = "studentId";

const student = {
    [idType]: "A424587", // here we are passing the idType as a value by covering with square brackets [key] to make it Dynamic
    sName: "John",
    sAge: 20,
    isStudent: false,
    greet: ()=>{
        console.log(`Hey my ${idType} is ${student[idType]} and my name is ${student.sName}`);
    },
};

student.greet();

// Pass by Value: Basically a copy of the value is created and passed to the function. Any changes made to the copy does not effect the original value

let a = 10;
const update = (a) => (a = 20);
console.log(update(a));
console.log(a);

// Pass by reference: Basically here we are passing the original memory location to the function or assigned to a variable such that any changes made through the reference will change the original object

// let obj = {id: 10, name: "John Doe"};

// let obj1 = obj;

// obj1.name = "Michel";
// console.log(obj1);
// console.log("original Object",obj);


// to avoid giving the direct reference we use object.assign({},objectName) method or spread operator(...)

let obj = {id: 10, name: "John Doe"};

let newObj = Object.assign({},obj);

newObj.name = "Michel";

console.log(newObj);
console.log("Original Object",obj);


// Comparison by reference

// Two objects are equal if they refer to the same object

// const obj1 = {name:"John"};
// const obj2 = {name:"John"};

// const isEqual = obj1==obj2 ? true : false; // This will retun false even if they are looking same because obj1 and obj2 have diffrent memory addresses 

// but if we do this 
// const obj3 = obj1;

// const isEqual = obj1===obj3 ? true : false; // This will return true because we have directly assign the object to an another object variable;

// console.log(isEqual);



// "this" keyword in javaScript (Run the example code in browser window)

// 1. In an object method "this" refers to the object
// 2. Alone, "this" refers to the global object  // global object means-->window object
// 3. In a function "this" refers to the global object
// 4. In a function-->In strict mode--> "this" is undefined
// 5. In an event, "this" refers to the element that received the event.
// 6. Methods like call(),apply(), and bind() can refer this to any object

// function callme(){
//     console.log(this);
// }

// callme();


// Objects useful methods are:

// 1. Object.keys(objectName): Returns an array containing all the keys of the specific object

let keys = Object.keys(obj);
console.log(keys);

// 2. Object.values(ObjectName): Returns an array containing all the values of the key's from a specific object

let values = Object.values(obj);
console.log(values);

// 3. Object.entries(objectName): Returns an array containing all the key-value pairs from a specific object

let keyValues = Object.entries(obj);
console.log(keyValues);

// 4. ObjectName.hasOwnProperty(keyName): Returns a boolean value indicating whether the object has the specified property or not.

console.log(obj.hasOwnProperty("name"));


// 5. Object.assign(targetObject,sourceObject): Basically it copies all the key-values from source and added to the target object. || targetObject may be empty object {} or a previous defined object

let target = {a:1,b:2};

let source = {c:5,b:3};

Object.assign(target,source);
console.log(target);

// 6. Object.freeze(objectName): Basically it freezes and object, preventing new propeties from being added to it and also prevents properties from being modified or delete.

Object.freeze(target);
target.a = 5;
console.log("After freezing the Object",target);


// Q. Given an object representing a student, write a function to add a new subject with its corrosponding grade to the student record. Also check whether the grade property exist or not

let student1 = {
    name: "Bob",
    age: 20,
    grades:{
        math: 90,
        science: 85,
        history: 88,
    },
};

let addNewSubject = (subject,marks)=>{

    if(student1.hasOwnProperty("grades")){
        student1.grades[subject] = marks;
    }else{
        console.log("Property not exist");
    }

    return student1;
};

addNewSubject("Computer",92);
console.log(student1);
