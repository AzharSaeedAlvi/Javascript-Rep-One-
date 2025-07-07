// const user = {

//     username: "Azhar", 
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`Hi ${this.username}, welcome to the website`);
//         console.log(this);  // gives whatever is present in the current context 
// }
// }

// user.welcomeMessage()   // This will give the output ' Hi Azhar, welcome to the website

// user.username = "sam"   // We are changing the context here.
// user.welcomeMessage()


// console.log(this);  // NOTE| INTERVIEW: This will give {} in node evnviornment although it will return 'windows' in console log on the chrome. Reason - earlier the only way to execute js was inside the browser that was the only engine, now there are stand along packages like Node.js which allows us to have this result. 

// THE OBJECT INSIDE THE BROWSER IS CALLED THE WINDOW OBJECT 


// +++++++++++++++++++++++++++++ Arrow Object +++++++++++++++++++++++++++++++++++++++++++++++ // 

// function chai() {
//     console.log(this);
// }

// chai()   // This will return alot of values, if we use this inside a function in the node enviornment


// function chai(){
//     let username ="Azhar"
//     console.log(this); // this will give a lot of values 
//     console.log(this.username);  // this will return undefined. || Our context isn't allowing us to use this inside a function
// }

// chai()




// +++++++++++++++++++++++++++ DECLARING FUCNTIONS USING ARROW FUNCTION +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //


// const chai = function(){
//     let username = "Azhar"
//     console.log(this.username);   // Returns undefined
// }
// chai()


const chai = () =>  {     // Remove function and add => infront of the ()
    let username = "Azhar"
    console.log(this.username); // Returns undefined
    console.log(username); // Returns Azhar 
    console.log(this);   // Returns {}
}

// chai()


// Syntax of arrow function -->   () => {} 

    // EXPLICIT RETURN, if we use {} curly brackets then we have to use return statement to return a value
    // const addTwo= (num1, num2) => {
    //     return num1 + num2 
    // }
    // console.log(addTwo(2,3))



    // const addThree = (num1, num2) =>  num1 + num2      // IMPLICIT RETURN, if we are not using {} curly brackets then we don't use return   // Used alot in React
    // console.log(addThree(2, 3))



    // const addTwo = (num1, num2) => {username: "Azhar"}  // This will return the value as undefined since we cannot use an object without wrapping it in parenthesis
    // const addTwo = (num1, num2) => ({username: "Azhar"}) // NOTE - In order to return an object you will have to return it by wrapping it in praenthesis (). 

    // console.log(addTwo(3,4))


    // const myArray = [2,5,3,7,8]

    // // Different syntax used 
    // myArray.forEach(function  () {})
    // myArray.forEach(() => {})
    // myArray.forEach(() => ())


        // READ DOCUMENTATION ON THIS KEYWORD.

