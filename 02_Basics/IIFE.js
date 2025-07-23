//  EXAMPLE IIFE - Immediately Invoked Function Expression

// Syntax of an IIFE:

// (function() { ...... })();   // The last '()' is a must, without it, the function will not be executed.

// The code below can be read in the following manner: 

/* constant counter stores the IIFE 
Start of the IIFE function with a return value: 
    Creates and stores 0 in the variable 'count' 
    Add the value that needs to be returned: 
    Call the function increment()
    Open the scope
    Add value to the count variable. 
    Close the scope for the increment function 
    Add comma to start a new function 
    Call the function getCount()
    Open the scope
    Return the value of count()
    Close the scope
    Close the initial scope of the function that is being stored in the constant counter 
    Close the function 
    Add '()' to make it an IIFE (Immediately Invoked Function Expression)
    Add semi-colon to confirm that you have finished the IIFE. 

(function () {
let count =0; 

return{
    increment(){
        increment++;
    }
    getCount(){
        return count;
    }

}})();


Counter.increment();    // This will call the function increment and increase the value stored in Counter by 1  | Old Value = 0, New Value = 1
Counter.increment();    // This will call the function increment and increase the value stored in Counter by 1  | Old Value = 1, New Value = 2
console.log(Counter.increment()); // This will give the output as undefined, since we have not setup a return type in the increments() scope, though it will increase the old value stored in counter by 1
console.log(Counter.getCount());  // This will return the output as 3 
console.log(Counter.count);  // This will return undefined, since we have encapsulated the variable 'count' inside the IIFE.


*/


// const Counter = (function () {  
//   let count = 0;              // This is not accessible outside the IIFE, due to data encapsulation

//   return {
//     increment() {
//       count++;
//     },
//     getCount() {
//       return count;
//     },
//     reset(){                            // If called will re-initialize the value of count to 0;
//         count = 0;
//     }
    
//   };
// })();

// // Counter.increment();
// Counter.increment();
// // console.log(Counter.increment()); // 1
// console.log(Counter.getCount());
// console.log(Counter.count);  // This will return undefined. Due to data encapsulation

/* WHY USE IIFE: 
    Keeps internal data private
    Creates one shared instance (Singleton)
    Avoids polluting global namespace
    Uses closure to preserve state.
    */ 

    // ----------------------------------------------------------------Example 1-----------------------------------------------------------------------
    // Prevents pollution of global scope. 

        // For a code without IIFE we will have to create a variable in global scope for it it be accessed and used: See below

        // let counter = 100; 
        // function increase() {
        //     counter++
        // }

        // // If we use IIFE we can store the variable inside the IIFE and could be accessed using the functions inside the IIFE (i.e. count is not in the global scope but is private)

        // const secret = (function(){
        //    let  count = 0; 
        //     return{
        //         increment(){
        //             count++
        //         },
        //         getCount(){
        //             return count;
        //         }
        //     }

        // })
  
  
    // // ---------------------------------------------------------EXAMPLE 2 ------------------------------------------------------------------------------------------------
    //     PERFECT EXAMPLE FOR AN IIFE: To Create Private variables



const secret = (function () {
  let hidden = "🔒 private data";
  return {
    reveal: () => hidden
  };
})();

console.log(secret.reveal()); // 🔒 private data
console.log(secret.hidden);   // undefined ❌



// --------------------------------------------- EXAMPLE 3 ------------------------------------------------------------------------------ //

//  Run setup code 

(function init() {
  console.log("Initializing the app...");
  // Set up stuff here
})();



// ------------------------------------------------------EXAMPLE 4 --------------------------------------------------------------------------- //

// Used to pass arguments:

(function(name) {
  console.log(`Hello, ${name}`);
})("CD Learner");                 

// This wil print Hello, CD Learner