// ES13

// 1. Array.findLast() and Array.findLastIndex()

const array = [1,2,3,4,5,4,6];
console.log("Last Element of the Array is = ",array.findLast((currElement)=> currElement));
console.log("Last index number of the element is =  ",array.findLastIndex((currElement)=> currElement));


// Array.prototype.toReversed(): Reverse the array without hampering the original array

const nameArray = ["ram","sita","gita"];
const reverseArray = nameArray.toReversed();
console.log("Reversed Array is = ",reverseArray);


// Array.prototype.toSorted(): Sort the array without hampering the original array

const sortedArray = nameArray.toSorted();
console.log("Sorted Array is = ",sortedArray);

// Array.prototype.toSpliced(startingIndex,deleteCount,item1,...)

const splicedArray = nameArray.toSpliced(1,1,"Bahadur");
console.log("Spliced Array is = ",splicedArray);


// Array.prototype.with(indexNumber,"newItem"): Basically it is used to change the value of an element at an specific index in an array. It retuns the new array without hampering the original array

const replaceArray = nameArray.with(1,"Vinod");
console.log("Replaced Array element is = ",replaceArray);