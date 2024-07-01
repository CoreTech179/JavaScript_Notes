// 1. The local Storage object allows you to save key / value pairs in the Browser
// 2. The local Storage object stores data with no expiration date
// 3. The data contained inside the local storage is not deleted even if the browser is closed and system is shut down. It will remain exist for future purpose.

// Note: Run in browser console

// How to add the data to local storage

// Syntax

// localStorage.setItem(key,value);

localStorage.setItem("Js Course","JavaScriptLocalStorage");

// Get the data from local Storage

// Syntax

// localStorage.getItem(key);

localStorage.getItem("Js Course");

// Remove data from the local Storage

// Syntax

// localStorage.removeItem(key);

localStorage.removeItem("Js Course");

// LocalStorage can only strore strings, so when you want to store a complex Data structure like an array or object you need to convert it into string using JSON.stringify

// 1. JSON.stringify: It converts the js object into a JSON String
// It is useful when you want to send some data to the server or store it on a text file as JSON is a common data interchange format

// const data = {
//     name: "John",
//     age: 30,
//     city: "Pune"
// };

// const jsonString = JSON.stringify(data);
// console.log(jsonString);

// Output: '{ "name": "John", "age": 30, "city": "Pune" }'


// 2. JSON.parse: Converts a JSON String into a JS object
// Useful when you will receive json data from a server and you want to read it from a file and you want to work with it as a js object

// const jsonString = '{ "name": "John", "age": 30, "city": "Pune" }';
// const parseData = JSON.parse(jsonString);
// console.log(parseData);