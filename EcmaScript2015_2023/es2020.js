// ES11 new added features

// 1.BigInt
// 2.Nullish coalescing Operator
// 3.Optional Chaining Operator
// 4.promise.allSetteled || we will see in promises 


// BigInt: Basically in javaScript it is a datatype which is used to represent and perform operations on large integers that exceeded the limits of the regular number.

// Creating BigInts
// Using the 'n' suffix

// Maximum Number that javaScript handles without any type of error is 9007199254740991 and after that it will give unneccesary error. To avoid this we use BigInt 

const maxNumber = Number.MAX_SAFE_INTEGER;

console.log(maxNumber);

// 1. Using the BigInt Constructor

const bigNumber = BigInt("12345678954212436598542124575964");
console.log(bigNumber); // output: 12345678954212436598542124575964n , where n represents bigInt


// 2. Nullish coalescing Operator (??) --> Basically it is a logical operator that provides a concise way to handle null or undefined values. It returns the right hand operand when its left hand operand is null or undefined otherwise it returns the left-hand operand

let myFavoriteNumber = 0;

let userFavoriteNumber = myFavoriteNumber ?? 10; // Here instead of "||" operator we use "??" operator

console.log(userFavoriteNumber); // output: 10 becuase although the favorite number of the user is 0 but for js 0 means false such that it is giving 10 as by default therefore to overcome this we use coalescing operator (??) to handle this problem.


// 3. Optional Chaining operator (?.) --> Basically it is useful when working with  objects. Suppose we are trying to access a object property which value is not defined then what will be the resultant output. Therefore to overcome this problem we use optional chaining operator.

const person = {
    name: "John",
    address: {
        city: "Pune",
        ZipCode: 12345,
    },
};

// Traditional Way

// let city = person.address ? person.address.city : "Unknown City";
// console.log(city);

// Modern way
let city = person.address ?.city ?? "Unknown City"; // Difference is that we can ommit person.address in optional chaining and instead of || we use ?? to handle falsy value
console.log(city);




