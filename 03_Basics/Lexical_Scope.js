// Lexical scope means accesibility of variables is determined by the structure of the code(its physical placement in the source code)
// Lexical code doesn't depend on where the function is being called it depends on where it is written. 

// Basic Example

function outer() {

    name = "azhar";

  function inner(){
        console.log(name);
    }

    inner();
}

outer();

// 💡 Even though name is not defined inside inner(), it’s accessible because inner() is defined inside outer().

// That’s lexical scoping — functions remember the scope where they were created.


//------------------------------Lexical Scope vs this (confusion alert!) ----------------------///

// Lexical Scope: where variables are defined

// this: depends on how a function is called (dynamic)

// Arrow functions use lexical this, meaning they inherit this from their outer scope, just like lexical scope for variables.