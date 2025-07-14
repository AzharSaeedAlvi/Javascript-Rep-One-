"user strict"  // Treated as a newer version of JS
// ‘Use strict’ is written at the beginning of the code, enforcing stricter parsing and error handling to improve code quality and catch common coding mistakes. 



// alert("hello")  // we are using nodejs and not browser 

// The most important thing is readibility in coding 

// Use documentation for MDN, although TC39.es (It has all the standard formats)


let name = "Azhar"
let age = 18 
let isLoggedIn = false
let state;
let sym1 = Symbol();

// PRIMITIVE DATA TYPE
// Number => 2 to power 53
// bigint
// string => "" 
// boolean => true/false
// null => standalone value -> Represntation of empty value  // Typeof will give this as an 'object'
// undefined => no value has been assigned // Typeof will give this 'undefined'
// symbol => unique


// Object

// console.log(typeof undefined); // undefined
// console.log(typeof null);  // object
// console.log(typeof Symbol); // function 
// console.log(typeof sym1); // symbol 
// console.log(typeof symbol); // undefined 

// console.log(1 - 2);
// console.log(typeof 1 - 2);

 
//  3b How does the console.log(typeof ); function is read? 

// Note 1: It is executed from left to right. 

// Note 2: If we have console.log(typeof 1 - 3) it will be read as 

// (typeof 1) - 3 

// “number” - 3 

// NaN → Since string - number is not an arthmetic

// Had it been console.log( typeof (1 - 3) ) then it would return  number since it reads the inner bracket first then from left to right 



let x = " 22 22"
let y = Number(x);    // Number() tries to convert the entire string into a number, ignoring leading or trailing whitespace.

console.log(y);
console.log(typeof ("2222" - "33"));  // Returns NaN since JS cannot perform operation with a string and a number. 