// There are 9 ways to Create date object in js

// The Date constructor creates a Date objects when called as a function, it returns a string representing the current time

// Syntax

// 1. new Date()
// 2. new Date(date string)
// 3. new Date(year,month)
// 3. new Date(year,month,day)
// 3. new Date(year,month,day,hour)
// 3. new Date(year,month,day,hour,minitues)
// 3. new Date(year,month,day,hour,minitues,seconds)
// 3. new Date(year,month,day,hour,minitues,seconds,milliseconds)
// 3. new Date(milliseconds)

const currentDate = new Date();
console.log(currentDate);

// 2024-07-01T04:07:41.117Z

// Basically it is a ISO standard format for representing Dates and times. In this format the date and time are represented Together seperated by a letter T. The "Z" at the end represents the time is in UTC (Coordinated Universal Time)


// new Date(year,month) --> Creates a date object with specified year and month
const date1 = new Date(2024,4);
console.log(date1);

// new Date(year,month,day) --> Creates a date object with specified year and month and day
const date2 = new Date(2024,4,21);
console.log(date2);

// Month starts from 0 to 11 (i.e. 0 = Jan, 1 = Feb....)

// new Date(year,month,day,hour) --> Creates a date object with specified year and month and day and hour
const date3 = new Date(2024,4,21,10);
console.log(date3);

// new Date(year,month,day,hour,minitues) -->Creates a date object with specified year and month and day and hour and miniutes
const date4 = new Date(2024,4,21,10,44);
console.log(date4);

// new Date(year,month,day,hour,minitues,seconds) --> Creates a date object with specified year and month and day and hour,miniutes and seconds

const date5 = new Date(2024,4,21,10,44,10);
console.log(date5);

// new Date(year,month,day,hour,minitues,seconds,milliseconds) --> Creates a date object with specified year and month and day and hour,miniutes,seconds and milliseconds

const date6 = new Date(2024,4,21,10,44,10,55);
console.log(date6);


//  new Date(milliseconds) --> Creates a Date object with specified milliseconds 
const date7 = new Date(55);
console.log(date7);


const currentMilliseconds = new Date().getTime();
console.log(currentMilliseconds);

let dateFromMiliseconds = new Date(currentMilliseconds);
console.log(dateFromMiliseconds);
// Therefore from miliseconds we can get our current time also.



// JavaScript get Date methods

const currDate = new Date();
console.log(currDate.getFullYear()); // This will retun the corrosponding year from Date object
console.log(currDate.getMonth()); // This will return the index number of the month (i.e 0 based indexing)
console.log(currDate.getDate()); // This will return todays date 
console.log(currDate.getDay()); // This will provide the the index number of the day (i.e 0 based indexing --> 0 = Sun, 1= Mon,....6 = sat) 


// JavaScript set date methods

// 1. setFullYear(Year)

const currDate1 = new Date();
currDate1.setFullYear(2025);
console.log(currDate1);

// 2. setMonth(month)

const currDate2 = new Date();
currDate2.setMonth(1); // 1 for Feb
console.log(currDate2);

// 3. setHours(number)

const currDate4 = new Date();
currDate4.setHours(10);
console.log(currDate4);

// 4. setMinitues(number)

const currDate5 = new Date();
currDate5.setMinutes(10);
console.log(currDate5);

// 5. setTime(number)

const currDate6 = new Date();
currDate6.setTime(15420131245878);
console.log(currDate6);

// JavaScript get Time methods


const currDate3 = new Date();

const hour = currDate3.getHours();
const minitues = currDate3.getMinutes();
const seconds = currDate3.getSeconds();
const miliseconds = currDate3.getMilliseconds();
const time = currDate3.getTime(); // aternative of getTime is Date.now() method 

console.log(hour);
console.log(minitues);
console.log(seconds);
console.log(miliseconds);
console.log(time);


// Few useful methods in Date object

// 1.toLocalString(): It returns a String representing the date and time portion of a date object using the current local convention (i.e mm:dd:yyyy, time)

const myDate1 = new Date();
const localString = myDate1.toLocaleString();
console.log(localString);

// Now if we want only local date not time then we have a method toLocalDateString();

const myDate2 = new Date();
const localDate = myDate2.toLocaleDateString();
console.log(localDate);

// Now agin if we want only time not date this time then we have a method toLocaleTimeString();

const myDate3 = new Date();
const localTime = myDate3.toLocaleTimeString();
console.log(localTime);