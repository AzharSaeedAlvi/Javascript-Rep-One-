
// ----------------------------------------- Different ways to define an object ----------------------------------------- // 


/* 

List of ways to define a function: 

1. Function Declaration  --> Only this is hoisted.
2. Function Expression 
3. Arrow Function (ES6+) 
4. Function Constructor(rarely used) 
5. Method in Object
6. IIFE 

Note - Hoisted functions can be called before it is defined. 

*/ 

// 1. Function Declaration 

function greet(name){
return "Hello, " + NamedNodeMap; 
}
greet("Azhar");



// 2. Function Expression --> Treated as a value, hence can be assigned to variables or pass it around.

const greet = function(name) {
    return "Hello, "  + namel 
};


// 3. Arrow Function

const greet = (name) => {
    return "Hello, " + name1
};


// 4. Function Constructor(Not Recommended)  



const greet = new Function("name", "return 'Hello, ' + name;");


//5. Object Method --> Useful when functions are part of an object's behavior , this refers to the object

const greeter = {
    greet(name){
        return "Hello, " + name + "!";
    }
};
console.log(greeter.greet("Azhar"));


/// Azhar Argument | Greeter -> Object  | greet -> function  | name Parameter




// 6. IIFE ( Immediately Invoked Function Expression)


(function(name) {
    console.log("Hello, " + name + "!");
})("Azhar");

// OR

((name)=> {
    console.log("Hello, " + name + "!");
})("Azhar");

