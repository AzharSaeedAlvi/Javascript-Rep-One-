// const userEmail = " a@azhar.ai" 
// if(userEmail){
//     console.log("got user email")
// }

// else{
//     console.log("don't have user email");
// }

// const userEmail2 = ""

// if(userEmail2){
//     console.log("got user email")
// }

// else{
//     console.log("don't have user email");
// }

// const userEmail3= []

// if(userEmail3){
//     console.log("got user email")
// }

// else{
//     console.log("don't have user email");
// }


// If string is present -> True 
// If blank array is present -> True 
// If blank string is written -> False


// Falsy values(INTERVIEW)

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values (INTERVIEW) 
//  "0" , 'false', " ", [] , {}, function(){} // Known as empty function 

// Syntax to confirm if the array is empty or nto 

// if(userEmail.length === 0) {
//     console.log("Array is empty");
    
// }

// const emptyObj ={}

// if(Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// }


// false == 0 is true 
// false == '' is true 
// 0 =='' is true


// ++++++++++++++++++++++ NULLISH COALESCING OPERATOR (??) : null undefined ++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 

// Main usecase is that when we are using firebase or getting a call from the data base then there are time where we do not receive any response directly or we recieve more than 1 value. 
// You could get null or undefined scenarios


// let val1;
// // val1 = 5 ?? 10
// val1 = null ?? 10   // In real life scenario we create a function to call instead of 10. 
// val1 = undefined ?? 15
// console.log(val1);



// val1 = null ?? 10?? 100
// console.log(val1)


// TERNIARY OPERATOR 

// condition ? true : false  // Syntax 

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("greater than 80"): console.log("less than 80") // condition ? true : false


