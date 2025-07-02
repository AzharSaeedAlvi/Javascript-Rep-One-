// Based on how the data is stored in the system we have two types of data types 
// PRIMITIVE DATA TYPE
   // 7 Types: String, Number, Boolean, null, undefined, Symbol, BigInt(used for extra large values)

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;       // = let userEmail = undefined

const id = Symbol('123') 
const anotherId = Symbol('123')   // Symbol is also a data type. NOTE - Both id and anotherID will have different values stored in them

console.log(id === anotherId) // will return False 

const bigNumber = 28457942593447932n   // will be stored with datatype BigInt



   // REFERENCE DATA TYPE / NON-PRIMITIVE 

   // Array, Objects, Functions 
  
   const heros =["shaktiman", "naagraj", "doga"]

let myObj = {
    name:"Azhar",
    age: 23
}

const myFunction = function() {

    console.log("Hello World");
}


console.log(typeof bigNumber);

// INTERVIEW - RESULT DIFFERNT DATA TYPES WOULD GIVE - can be found under 'The types of Operator' on 262.emca.international.org

console.log(typeof myFunction);  // This returns function but in actuality it is 'Object Function' 






