// // conversion of code in form of package so that it could be used at multiple places. 


// //Syntax 

// // function sayMyName() {}


// function addTwoNumbers(number1, number2){    // number 1 and number 2 are parameters  NOTE (i.e. when you are creating the definition of a function)
//     console.log(number1 + number2);
// }

// addTwoNumbers(3, 4)  // Values 3 and 4 in this scenario are arguments NOTE  (i.e. when you are calling a function)

// const result = addTwoNumbers(3, 6)


// console.log("Results:", result);  // this will reuturn the result as undefined.


function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result 
    return number1 + number2
    console.log("Azhar");   // NOTE - It is an unwritten rule that nothing is executed after result.
    
}

// now if we try to return result it will not give the value as undefined. Reason - The function is not returnining a value.  In order for us to see the value we would require to wirte the statement return result 

// const result = addTwoNumbers(3,5)

// console.log("Result", result);


function loginUserMessage(username = "Sam"){    // Sam is the default value as that would prevent the scenario where we get undefined value
    return `${username} just logged in`
}

// console.log(loginUserMessage("azhar")) // This will return Azhar
// console.log(loginUserMessage(""))  // This will return nothing
// console.log(loginUserMessage())  // Interview - This will return undefined



// In order to tackel the undefinded case what we are going to do is use the condition: 
// if(username === undefined){    // THIS CODITION IS ALSO WRITTEN AS (!username),  as "" , undefined and ! are related to false value
// console.log("Please enter a username")
//  return
//  }
//  Reason - Once the return statement has been excuted nothing will be executed after that 
// Alternatively we could also use function loginUserMessage(username = "sam" )  // This will assign a default value and hence will not return undefined. 


// SCENARIO - WHEN WE ARE NOT SURE HOW MANY INPUTS THEIR MIGHT BE PRESENT  || REST Operator - '...'

// function calculateCartPrice(...num1){    // ... is called a rest operator or spread operator at times. This is used when we have to pass multiple parameters
// return num1 
// }


// console.log(calculateCartPrice(200, 400, 500))


function calculateCartPrice(val1, val2, ...num1){    // ... is called a rest operator or spread operator at times. This is used when we have to pass multiple parameters
return num1 
}

// console.log(calculateCartPrice(200, 400, 500, 2000))  // this will  give the output as 500, 2000
// console.log(calculateCartPrice(200,400,500,2000, 3000)) // this will return output as 500, 2000 and 3000 since the apart from the first 2 values val1 and val2 other will go into the array created by using the rest operator. 



// const user ={
//     username: "Azhar", 
//     price: 199,
// }

// function handleObject(anyObject)
// {
//     console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
// }

// handleObject({ 
//     username: "Sam", 
//     price: 399 
// }
// )

// NOTE - HERE PLEASE NOTE THAT FOR AN OBJECT THE SYNTAX IS -   ObjectName ({values}) 
// If we have already created the object the syntax is - ObjectName(object)



const myNewArray = [200, 400, 100, 600]   // Syntax to initialize an array - const ArrayName = [values]

function getSecondValue(getArray){
    return getArray[1]
}

console.log(getSecondValue(myNewArray));  // alternatively console.log(getSecondValue([200, 300, 400, 600]))


