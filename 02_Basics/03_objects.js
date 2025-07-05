// singleton  ->  Object.create  // constructor method 

// object literals

const mySym = Symbol("Key1")

const JsUser = {
    name : "Azhar",
    age : 23,
    mySym2 : "mykey1",
    [mySym]: "mykey1",    // Correct method to define the data type Symbol
    location: "Lucknow",
    Email: "test@gmail.com",
    isLoggedIn: false,
    "Full Name" : "Azhar Saeed Alvi",  // Anything with a space in between would need to be written in ""
    
} 


// console.log(JsUser.Email);   // NOTE - Not preferred since we cannot do anything if the variable name is Full Name
// console.log(JsUser["Email"]); // NOTE - We added "" since email is treated as string inside the object.
// console.log(JsUser["Full Name"]); 
// console.log([mySym]); 

JsUser.email="azhar@chatgpt.com"
// Object.freeze(JsUser)      // This freezes all the values and these cannot be changed.
JsUser.email = "Azhar@google.com"
// console.log(JsUser);


//Creating a function

JsUser.greeting = function(){
    console.log("Hello JS User");
}

// NOTE - In this function we are using String Interpolation - utilizing a data stored somewhere and using it inside a function.
JsUser.greetingTwo = function(){
    console.log('Hello JS user, ${this.name}');  // Backticks  string, $(this.) Backticks
}

console.log(JsUser.greeting);   // Returns [Function (anonymous)] meaning it has identified a function.4
console.log(JsUser.greeting()); // This will return the action inside the function.  [Difference of ()]



