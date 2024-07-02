// Basically synchronous code executes line by line,blocking further execution until each line is completed, while asynchronous code allows other code to continue executing while it waits for an asynchronous operations to complete.

// Example of Synchronous code

// const func2 = ()=>{
//     console.log("function 2 starts and end"); // output 2nd
// };

// const func1 = ()=>{
//     console.log("Function 1 started"); // output 1st
//     func2();
//     console.log("Function 1 completed"); // output 3rd
// };


// func1();


// Example of Asynchronous code


const func2 = ()=>{
    setTimeout(()=>{
        console.log("Func2 started and ends"); // This represents asynchronous behaviour thats why it is completed at the end 
    },2000); // output 3rd
};

const func1 = ()=>{
    console.log("Function 1 started"); // output 1st 
    func2();
    console.log("Function 1 completed"); // output 2nd
};

func1();

