// JavaScript Timing Based Events

// List of Timing Based Events are: 

// 1. setTimeout() --> Basically it is used to execute a function or a Code block after a specified delay in miliseconds

// function callBack(x){
//     console.log("This function will be sheduled after a delay of 1000 miliseconds (1sec)", x);
// }

// setTimeout(myTime,1000);
// setTimeout(() => myTime(5),1000);




// 2. setInterval() --> Basically it is used to repetedly execute a function or a Code block at a specified interval in milliseconds.

// function callBack(){
//     console.log("This function will be repeat after every 1000 miliseconds (1sec)");
// }

// setInterval(callBack,1000);





// 3. clearTimeout() --> Basically it is used to stop the function that is running by setTimeout method

// function callBack(){
//     console.log("This function will be repeat after every 1000 miliseconds (1sec)");
// }

// const myWork = setTimeout(callBack,1000);

// clearTimeout(myWork);



// 4. clearInterval()--> Basically if we want to cancel a schedule interval before it occurs, you can use the claer Interval function.

// function callBack(){
//     console.log("This function will be repeat after every 1000 miliseconds (1sec)");
// }

// const myWork = setInterval(callBack,1000);

// clearInterval(myWork);