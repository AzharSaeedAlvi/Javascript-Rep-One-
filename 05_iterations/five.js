// foreach loop  // used with array alot 
// some loops are directly added to the properties of an array. 
// anything after the dot infront of the variables is called method.


// Variation 1


// const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (item){} )                      // We do not write the name of the function when using forEach. Reason - Since it is a callback function and callback function do not have a name.
// // The item that we have specified inplace of the parameters would go back to the array each time and pick a value. Since that is the parameter || parameter holds the value that is being used.

// coding.forEach( function (val){
//     console.log(val);   
// })

// Variation 2 => using Arrow function

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( (item) => {
//     // console.log(item);
// } )                      

// // // The item that we have specified inplace of the parameters would go back to the array each time and pick a value. Since that is the parameter || parameter holds the value that is being used.

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)  // We need not give a reference here. 

// coding.forEach(printMe())  // if we give a reference, as shown in this line () then we will get this error: undefined is not a function


// coding.forEach((item, index, arr) => {           // forEach pulls not only the values but the index and the complete array as well. 
//     console.log(item, index, arr);
// })


const mycoding = [
    {
        languageName : "javascript",
        languageFile: "JS",
    },
    
    {
        languageName : "Java",
        languageFile: "Java",
    },
    {
        languageName : "Python",
        languageFile: "Py",
    }

]

mycoding.forEach((item) => {
    
    console.log(item.languageName)
});

