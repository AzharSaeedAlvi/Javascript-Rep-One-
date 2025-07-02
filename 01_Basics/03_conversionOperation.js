let score = "33"
let scoreWithAlphabet = "33abc"
let scoreWithNull = null


console.log(typeof score);
// console.log(typeof score);  // To copy the same line as above use the shortcut shift+alt+down

let valueInNumberOne = Number(score)
let valueInNumberTwo = Number(scoreWithAlphabet)
let valueInNumberThree = Number(scoreWithNull)

console.log(typeof valueInNumberOne ) // typeof = Number value = 33
console.log(valueInNumberOne)

console.log(typeof valueInNumberTwo)
console.log(valueInNumberTwo)     // NOTE - typeof = Number value = NAN (Not a number)

console.log(typeof scoreWithNull)
console.log(scoreWithNull)        // NOTE - typeof = Object Value = null
console.log(valueInNumberThree)  // NOTE -  typeof = Object Value = 0



/* NOTES:
"33" => 33 
"33abc" => NAN
// true => 1 ; false => 0 

*/



let isLoggedIn = 1 

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// "" => false  
// "any value" => true
// 1 => true 


let someNumber = 33 

let stringNumber = String(someNumber)

console.log(typeof stringNumber)
console.log(stringNumber)









