// /* CONVERSIONS */

// let score = "33"
//  let scoreWithAlphabet = "33abc"
// let scoreWithNull = null


// console.log(typeof score);
// // console.log(typeof score);  // To copy the same line as above use the shortcut shift+alt+down

// let valueInNumberOne = Number(score)
// let valueInNumberTwo = Number(scoreWithAlphabet)
// let valueInNumberThree = Number(scoreWithNull)     

// console.log(typeof valueInNumberOne ) // typeof = Number value = 33
// console.log(valueInNumberOne)

// console.log(typeof valueInNumberTwo)
// console.log(typeof valueInNumberTwo)     // NOTE - typeof = Number value = NAN (Not a number)

// console.log(typeof scoreWithNull);   // returns object. 
// console.log(scoreWithNull)        // NOTE - typeof = Object Value = null
// console.log(valueInNumberThree);  // NOTE -  typeof = Object Value = 0



// /* 

// NOTES:
// "33" => 33 
// "33abc" => NAN
// // true => 1 ; false => 0 

// */

// console.log(typeof false);  // returns boolean 

// let isLoggedIn = 1 

// let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

// // "" => false  
// // "any value" => true
// // 1 => true 


// let someNumber = 33 

// let stringNumber = String(someNumber)

// console.log(typeof stringNumber)
// console.log(stringNumber)



/*  OPERATIONS  */


// let value = 3 
// let negValue = -value
// console.log(negValue);
// console.log(typeof negValue);    // Returns number 

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**4)  // 2^2
// console.log(2/2)
// console.log(2%2)  // Remainder 


// let str1 = "hello"
// let str2 = " Azhar"

// let str3 = str1 + str2
// console.log(str3);


// const a = 1 - "2" + "2" 
// console.log(a)  // result in -12 
// console.log(typeof a);     // Returns String  

// console.log("2" + "2" - 1); // Returns 21
// console.log(typeof "2" + "2" - 1);   // returns NaN
console.log(1 - 3);
// // console.log("1" + 2)    // result in 12     || typeof -> string2
// // console.log( 1+ "2")    // result in 12     || typeof -> string2
// // console.log(1 + "2" + "2") // results in 122 ||typeof -> string   // Explanation can be found under ToPrimitive in documentation  
// console.log(typeof 1 + "2" + "2") // results in number22 
// console.log(1 + 2 + "2")  // results in 32  
// console.log(typeof 1 + 2 + "2")  // results in number22
// console.log(typeof (1 + 2) + "2")  // results in number2

// console.log(+true);  // output 1
// console.log(true);   // output true
// console.log(true+);  // output error
// console.log(+"");    // output 0


// READ - increment and decrement, document in js MDN

let gameCounter = 100
gameCounter++; 
console.log(gameCounter);

++gameCounter; 
console.log(gameCounter);


// c = null console.log(c);  // This gives an error. 
// c = null, console.log(c); // null 





















