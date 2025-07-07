let a = 10 
const b = 20 
var c = 300

{} // curly braces along with functions or if else etc. is considered as scope || It is considered as object during object declaration scope != object 


// if(true) {
//     let a = 200
//     const b = 20
//     var c = 30 

//     console.log(a); // Since we have used let instead of var, the value obtained inside local/block scope is different from that present at the global scope. 
    
// }

// console.log(a);
// console.log(b);
// console.log(c);  // This will give the output as 30, the reason being that even though c was defined as 300 in the global scope it was defined as 30 in the local/block scope and this is the drawback of using var 
// // So instead of var we use let. 




// Scope inside a scope 


// function one(){
//     const username ="Azhar" 


// function two(){
//     const website = "youtube"
//     console.log(username);
// }

// // console.log(website); // this will give the error 'website not defined' Reason - It is defined in the block scope of function two. 

// two()

// }

// one()


// if(true){
//     const username = "Azhar"
//     if(username === "Azhar"){
//         const website = "youtube"
//         console.log(username + website);
//     }
//     // console.log(website);  // will give error because of scope 
//     }
// // console.log(username);  // will give error because of scope.


// +++++++++++++++++++++++++++++++++++++++++++interesting++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ // 
// Two ways to declare a function 


console.log(addone(5))   // If we declare without creating an object, it will not throw an error if we place it before the actual function.

function addone(num){
    return num +1
    
}



// addTwo(5)  // If we declare it via creation of an object, and try to place it before the function it will throw an error.  

const addTwo = function(num){
    return num + 2 
}


