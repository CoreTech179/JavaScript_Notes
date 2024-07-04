// First class function --> Its just a concept

// First class function means if a function can be assigned to a particular variable and with the help of the variable we can pass any argument to the function is known as first class function.

// It is also known as function expression

// function Call(name){
//     console.log(`My name is ${name}`);
// }

// var greet = Call;
// console.log(greet("John"));


// Higher-Order Function --> Basically it is a function that takes one or more functions as an arguments or returns a function as a result


// CallBack Function --> A callback function is a function that is passed as an argument to another function and it is executed after the completion of a task

function processUserName(name,callback){
    console.log(`Received Input: ${name}`);
    callback(name);
}

function greet(name){
    console.log("Hello ",name);
}

processUserName("Bahadur",greet);




// Another example

const mathOperation = (a,b,add)=>{
    return add(a,b);
}

function add(a,b){
    return a + b;
}

console.log(mathOperation(2,3,add));