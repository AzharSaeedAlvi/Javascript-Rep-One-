// Array 
// Resizable in js
// Can be a mix of data types 
//indexing starts from 0 
// JS creates 'shallow copies' (shallow copies - copies that have the same reference points)  | Rfer to Heap concept


const myArr = [0,1,2,3,4,5]
const myArr2 = new Array(1,2,3,4)
console.log(myArr[0]);


// Array Methods 

// myArr.push(6)   // Adds value at the last 
// myArr.pop()     // Removes value at the last 

// myArr.unshift(9)   // Will inser 9 at the beginning 
// myArr.shift()      // Removes the value at the first place 


// myArr.includes(9)
// myArr.indexOf(3)


// const newArr = myArr.join()  // NOTE - Converts the array to the type String

// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr)   // Array that gives the type as String when join() is used 



// slice, splice   - INTERVIEW 
//Difference 


console.log("A", myArr)


const myn1 = myArr.slice(1,3)  // Doesn't make change in the orginal array and give value excluding the last placeholder

console.log(myn1); 
console.log(typeof myn1);
console.log("B", myArr);


const myn2 = myArr.splice(1,3)   
// removes the values present in the original array including the last placeholder 
// (i.e. on the 3rd place) and returns the values that have been removed

console.log(myn2);
console.log(typeof myn2);
console.log("C", myArr);






