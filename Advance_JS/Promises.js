// Promises in JavaScript

// Basically it is just like a container for the result of an asynchronous operation is known as promises or a container for the future value or result.

// Promise ----> Pending ------> Settled ------> Resolved  &  Rejected

// Where Settled means --> Async Task time is over 
//  Resolved --> you will et the value and Rejected -----> we get an error
// Pending stage ---> waiting stage 


// Promises have built-in methods like "then" and "catch" to handle the result the asynchronous operations when it is completed or encountered with error such that to make it easier to write asychronous code that is more readable and maintainable to traditional call back function.


// Syntax

// function newPromise(){
//     return new Promise((resolve,reject)=>{

//         // Asynchronous operation

//         // If successful call resolve(value);
//         // else unsuccessful call reject(error);

//     });
// }




// example


// const promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Hi my name is John Doe");
//     },2000);
// });

// promise.then((response)=>{

//     console.log(response); // Here we will get the response it it is successful

// }).catch((error)=>{

//     console.log(error); // here we will catch if it is rejected

// }).finally(()=>{

//     console.log("Finally block is completed!");

// });




// Another student enrollment example


// const studentName = "John";

// const enrollmentStudent = (stdName)=>{

//     return new Promise((resolve,reject)=>{


//         setTimeout(()=>{

//             const isSuccessfull = Math.random() > 0.4;

//             if(isSuccessfull){
//                 resolve(`Enrollment for ${stdName} successfull`);
//             }else{
//                 reject(`Enrollment for ${stdName} unsuccessfull`);
//             }


//         },2000);

        
//     });

// };

// enrollmentStudent(studentName).then((response)=>{

//     console.log(response);

// }).catch((error)=>{

//     console.log(error);

// }).finally(()=>{

//     console.log("Operation Completed");

// });




// Some Important methods for Promises

// 1. Promise.all(): Basically it is used when you want to wait for all promises to complete successfully. Reject state will throw an error. ( that means if out of 100--> 99% is completed and 1% is rejected the it will throw an error)

// 2. Promise.allSettled(): Basically it is used when you want to wait for all promises to complete, regradless of success or failure and get information about the outcome. ( that means if out of 100--> 99% is completed and 1% is rejected the it will not throw an error it will provide the outcome of the rest 99% )


// 3. Promise.race(): Basically it is used when you are interested in the result of the first promise to complete, rather then worrying about other promises for its success or failure 



// Example

const promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve("First")},2000);
});

const promise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve("Second")},2000);
});

const promise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{reject("Third")},2000);
});

// Using promise.all()

Promise.all([promise1,promise2,promise3]).then((response)=>{
    console.log(response);
}).catch((error)=>{
    console.log("Rejected promise is = ",error);
});

// Using promise.allSettled()

Promise.allSettled([promise1,promise2,promise3]).then((response)=>{
    console.log("Resolved Responses are = ",response);
}).catch((error)=>{
    console.log("Rejected Response is = ",error);
});


// Using Promise.race()

Promise.race([promise1,promise2,promise3]).then((response)=>{
    console.log("Resolved Responses are = ",response);
}).catch((error)=>{
    console.log("Rejected Response is = ",error);
});