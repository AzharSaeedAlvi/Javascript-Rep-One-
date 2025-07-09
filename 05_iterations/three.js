// for of function 


// syntax  - These are a bit array specific loops 

// ["", "" , ""]   // Adding string to an Array
 
// [{} , {}, {}]   // Adding objects to an Array 



// const arr = [1,2,3,4,5]

// // Syntax for forof loop 
// for (const element of object) {                  
//      // after const we would eventually write a variable  (here in place of element)
//     // object here implies that upon what thing do you want to apply the loop towards it need not be an object always
    
// }


// const arr = [1,2,3,4,5]
// for (const num of arr) {
    
//     console.log(num);
    
// }


// const greetings = "Hellow World!"
// for (const greet of greetings){
//     console.log(`Each char is ${greet}`)
// }


//+++++++++++++++++++ MAPS +++++++++++++++++++++++++++
// Map in itself is an object
//The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
//it is unique in the Map's collection. (i.e. no duplicates can be created.)
// Order remaings constant

const map = new Map()        
map.set('IN', "India")
map.set('UK', "United Kingdom")
map.set('FR', "France")
map.set('IN', "France")   // This won't be printed again
map.set('IN', "India")    // This won't be printed again

// console.log(map);


// for (const key of map) {  // This will print in the form of an array, unlike for specific values as can be seen when using map.
//     console.log(key)
// }


for (const [key, value] of map) {         // Syntax if we have to use Map with forof loop - NOTE || This implies Maps are iterable
    console.log(key, ':-', value)
    
}


const myObject = {
    'gameOne': 'NFS',
    'gameTwo': 'Spiderman',
}
for (const [key, value] of myObject) {
    console.log(key, ':-', value)   // myObject is not iterable error is obtained we have a different way to make this iterable
}
