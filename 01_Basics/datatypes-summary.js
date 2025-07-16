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



//**********************************************************************************************************/



// Stack(Primitive), Heap(Non-Primitive) 

let myYoutubeName = "AzharSaeedAlvi"

// NOTE - STACK CREATES A COPY OF THE VALUE | USED WITH PRIMITIVE DATA TYPES 
// NOTE - HEAP USES A REFERENCE VALUE | USED WITH NON-PRIMITIVE or REFERENCE DATA TYPES

// EXAMPLE: 

let myNewName = myYoutubeName
 myNewName = "Gabbar"

console.log(myYoutubeName);  // Returns - "AzharSaeedAlvi"
console.log(myNewName);     // Returns - "Gabbar"

// Reason - Creates a copy and make changes in that, remember the diagram. 

//Example: Non-Primitive Data Type 

let userOne = {
    
    Id: "W508114",
    UserEmail: "abc@gmail.com",
}

let userTwo = userOne

userTwo.email = "newabc@gmail.com"

console.log(userOne);   // Updated value since the reference point is the same as that in heap
console.log(userTwo);  // Updated value since the reference point is the same as that which is present in Heap (remember the diagram) 












