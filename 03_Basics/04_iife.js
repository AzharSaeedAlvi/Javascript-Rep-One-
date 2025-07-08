// Immediately Invoked Function Expressions (IIFE) 


// (function chai(){                        // Named IIFE 
//     console.log(`DB Connected`);
// })()

// Adding parenthesist outside the function that we created. 

// ()(); // definition of function, execution   || sytnax for IIFE

// Why IIFE ?  Function that executes immediately, and to avoid global scope's pollution/variable. INTERVIEW  

// Problem 
// Since we have already executed an IFFE function above and we haven't placed an endpoint/semi-colon ';' above. Reason - It is because IIFE doesn't know where does it end.
// ERROR - (intermediate value)(...) is not a function

( (name) => { 
    console.log(`DB Connected ${name}`);
}) ('Azhar')   // We added the argument here since according to the syntax that is the line where we are executing the value.



// Thought Process:
//  1. How would you write a named IIFE
//  2. How will you write an IIFE 
//  3. How will you pass a paramenter in an IIFE 
//  4. What do you need to keep in mind when passing more than 1 IIFE?  Ans - Ensure that you are using a semi-colon at the end of the first one.



