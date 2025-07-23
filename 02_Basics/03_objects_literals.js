// singleton  ->  Object.create  // constructor method 

// HERE WE WILL COVER OBJECT LITERALS

// object literals - create an object without using constructor.   --> {...} value : 'Azhar,    || This is the syntax of the object literals. 

// const mySym = Symbol("Key1")

// const JsUser = {
//     name : "Azhar",
//     age : 23,
//     mySym2 : "mykey1",
//     [mySym]: "mykey1",    // Correct method to define the data type Symbol
//     location: "Lucknow",
//     Email: "test@gmail.com",
//     isLoggedIn: false,
    "Full Name" : "Azhar Saeed Alvi",  // Anything with a space in between would need to be written in ""
    
// } 



// console.log(JsUser.Email);   // NOTE - Not preferred since we cannot do anything if the variable name is Full Name
// console.log(JsUser["Email"]); // NOTE - We added "" since email is treated as string inside the object.
// console.log(JsUser["Full Name"]); 
// console.log([mySym]); 

// JsUser.email="azhar@chatgpt.com"
// // Object.freeze(JsUser)      // This freezes all the values and these cannot be changed.
// JsUser.email = "Azhar@google.com"
// // console.log(JsUser);


// //Creating a function

// JsUser.greeting = function(){
//     console.log("Hello JS User");
// }

// // NOTE - In this function we are using String Interpolation - utilizing a data stored somewhere and using it inside a function.
// JsUser.greetingTwo = function(){
//     console.log('Hello JS user, ${this.name}');  // Backticks  string, $(this.) Backticks
// }

// console.log(JsUser.greeting);   // Returns [Function (anonymous)] meaning it has identified a function.4
// console.log(JsUser.greeting()); // This will return the action inside the function.  [Difference of ()]



// What is a prototype-linked method? 




// ----------------------------------------- EXAMPLE CODE -------------------------------------------------------------------//

const person = {
    name: "Alice",
    age: 30,
    isStudent: false,
    greet: function(){
        console.log("This is a function inside object literal where the stored name is " + this.name);
    }
};
person.greet();


/* NOTES: 

    Simple Syntax:      Don't need a class or a constructor
                        Both Dot and Bracket notion works
    Flexible:           Keys can store any type of value 
    Nestable:           Create complex Structures easily 
    Good for configs:   Often used for settings, JSON, etc.                    

*/

    // Object Literals:
    const car = { brand: "Toyota", year: 2020 };

    // Constructor: 

    function Car(brand, year) {
    this.brand = brand;
     this.year = year;
    }
    const myCar = new Car("Toyota", 2020);



// ---------------------------------------------------------------- Objects ------------------------------------------------------------------------------------- // 


//  Ways of creating an object:

/*


1. Object Literal     -> const obj= {a: 1}                       -->  Fast,clean,most comon  
2. Object Constructor -> const obj = new Object()                -->  Slower, less common 
3. Class(ES6)         -> class User{}                            -->  OOP-style, reusable
4. Factory Function   -> function creatUser() { reutrn { .... }} -->  Functional Pattern
5. Object.create()    -> Object.create(proto)                    -->  Create with prototype

*/