// USING THE REDUCE METHOD 
// reduce is also a callback function (i.e. we won't be using any name for the function)

myNums = [1,2,3,4]

// Using the arrow method
// const myTotalNumber = myNums.reduce((acc, curr) => (acc + curr),0)
// console.log(myTotalNumber); 


// Using a normal method for better readibility and understanding. 

// const myTotalNumber = myNums.reduce(function (acc,curr){
//     console.log(`Value of accumulator = ${acc} and the value of current value is ${curr}`);
// return acc+curr;

// }, 0 )   // The 0 here is the initial value of the accumulator that we have specified.

// console.log(myTotalNumber);




// REAL LIFE EXAMPLE 


const shoppingCart = [
    {
        itemName: "Course 1",
        itemPrice: 1000,
    },
    {
        itemName: "Course 2",
        itemPrice: 2000,
    },
    {
        itemName: "Course 3",
        itemPrice: 3000,
    },
    {
        itemName: "Course 4",
        itemPrice: 4000,
    },
]


// let TotalPrice = shoppingCart.reduce((acc, pricesum) => (pricesum.itemPrice + acc), 0)

// console.log(TotalPrice);


TotalPricetwo = shoppingCart.reduce( function(acc,itemValue) {
// console.log(` Value = ${acc} and the value of the next book in line is = ${itemValue.itemPrice}, while the name of course is = ${itemValue.itemName} `)
return itemValue.itemPrice + acc 

},0)

console.log(`Total Price of the course is ${TotalPricetwo}`);



// End of JS Basics Part One 