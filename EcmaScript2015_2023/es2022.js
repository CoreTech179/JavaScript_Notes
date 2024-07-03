// ES12

// 1. .at() method --> which is already seen while learning array. It only supports at array and string only

// 2. Object.hasOwn(objectName,property): Basically it is a method to check if a specific property exist inside the object or not. Basically it is an alternative of Object.hasOwnProperty() method

const book = {
    name: "John Doe",
    book: "JavaScript Course",
};

console.log(Object.hasOwn(book,"name"));