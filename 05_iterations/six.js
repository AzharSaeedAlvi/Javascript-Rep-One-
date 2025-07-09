// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
// })

// console.log(values);   // Return undefined value (i.e. it is not returning any value)


//+++++++++++++++ FILTER OPERATION ++++++++++++++++++++++

// Filter is also a call back function

// const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) => num > 4)
// console.log(newNums);  

// the callback function which access each value atleast once and then we have to give a value which decides what are the values that it is returning. 

// const newNums = myNums.filter( (num) => {
//      num > 4 })
// console.log(newNums);  

// This returns an empty array (i.e. [])
// Reason - Since we are using curly braces now, (i.e. you have started a scope) thus you will have to create a return type value. See below


// const newNums = myNums.filter( (num) => {
//     return num > 4 })
// console.log(newNums);  



// Using forEach to write the same code. 


// const newNums = [] 

// myNums.forEach((num) => {
//     if(num>4){
//         newNums.push(num)           // Basic method in an array to add value in an array - push()
//     }
// })

// console.log(newNums);


const books =[
    {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book Two', genre: 'non-Fiction', publish: 1992, edition: 2008},
    {title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
    {title: 'Book Four', genre: 'Science', publish: 1989, edition: 2010},
    {title: 'Book Five', genre: 'Fiction', publish: 2009, edition: 2014},
    {title: 'Book Six', genre: 'History', publish: 1987, edition: 2010},
    {title: 'Book Seven', genre: 'Science', publish: 1986, edition: 2011},
    {title: 'Book Eight', genre: 'Fiction', publish: 2011, edition: 1996},
    {title: 'Book Nine', genre: 'Fiction', publish: 1981, edition: 2004},
];

// const userBooks = books.filter((bk) => bk.genre === 'History' )
// const userBooks = books.filter((bk) => bk.publish >= 2000)   // This will return the correct values however, const userBooks = books.filter((bk) => {bk.publish >= 2000}) will return an 
// empty string. REASON - because we have added a curly bracket therefore it won't return any value unless we use the word 'return'. See the code below

const userBooks = books.filter((bk) => {
    return bk.publish >=2000
})
console.log(userBooks);