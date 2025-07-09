const myNumbers = [1,2,3,4,5,6,7,8,9,10]


// myNumbers.map( () => {})         // Map is also a callback   // If we open a scope we will also have to use return

// const newNums = myNumbers.map( (num) => num +10)



// ++++++++++++++++ CHAINING ++++++++++++++++++++++++++  // 

// Using two threee methods directly

const newNums = myNumbers
.map((num) => num*10)
.map((num) => num +1)  // This will have values of num as [10,20,30,.....100]
.filter((num) => num>30)  // Here the value of num that is recieved would be [11,21,31,.....101]

console.log(newNums);
