//  Interview - Difference between push,concat and spread when merging 2 arrays

const marvel_heros = ["Ironman","spiderman","Thor"]
const dc_heros = ["Batman","Superman","Flash"]


// marvel_heros.push(dc_heros)  // Treats dc_heros as one string 
// console.log(marvel_heros);

// console.log(marvel_heros[3][1]);  // This will give the first value of the new array but is not considered a good practicce 


// marvel_heros.concat(dc_heros)
// console.log(marvel_heros);  // This will not return the desired result since it will requrie a creation of new array 


// const newlist_of_heros = marvel_heros.concat(dc_heros); 
// console.log(newlist_of_heros); // Combines 2 values as individual values 


// const newlist_of_heros = [...marvel_heros, ...dc_heros]
// console.log(newlist_of_heros)  // would combine both arrays and treat each value as individual value 

// // more flexible as compared to concat 


// .flat

const another_array = [1,2,3, [4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)  // used when you are confused about the syntax
// so in order to convert that into an array we will use flat, also in place of infinity we usually provide 
// depth but in this case we will use infinity
console.log(real_another_array); // Returns in the form of single array 


console.log(Array.isArray("Azhar")) // Will reutn false
console.log(Array.from("Azhar"))    // Will convert this into an array however possible
console.log(Array.from({name:"Azhar"}))
// INTERVIEW: will return blank array [], since it is not able to convert it into an array 

const A = 100
const B = 200
const C = 300

console.log(Array.of(A,B,C))  // Combines and creates a new array






