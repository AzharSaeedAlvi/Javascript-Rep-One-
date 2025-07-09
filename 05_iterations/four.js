// Making the object iterable | We will use forin instead of forof | Difference between forof and forin INTERVIEW


// const myObject ={
//     js: 'javascript',
// cpp: 'C++',
// rb: 'ruby',
// swift : "swift by apple"

// }

// // FOROF LOOPS DO NOT WORK WITH OBJECT TO USE LOOPS FOR OBJECT WE CAN USE FORIN LOOP - NOTE

// // for (const key in myObject) {
  
// // console.log(key);

// // }

// // for (const key in myObject) {
// //     console.log(myObject[key])
    
// // }

// // for(const key in myObject){
// //     console.log(`${key} shortform is for ${myObject[key]}`)
// // }



// const programming = ["ks", "rb", "py"]

// for (const key in programming) {
//     console.log([key])   // This will give the values of the keys of the array i.e.  0,1 and 2 

//     }


//     for(const key in programming){
//         console.log(programming[key])  // This will give the values that are stored in the key
//     }

//     for(const key in programming){
//         console.log(`${key} holds the value ${programming[key]}`)
//     }



// SINCE MAPS ARE ITERABLE WE CANNOT USE THEM USING FORIN || NOTE - IT WILL NOT THROW ANY ERROR THOUGH! NOTE



const map = new Map()        
map.set('IN', "India")
map.set('UK', "United Kingdom")
map.set('FR', "France")
map.set('IN', "France")   // This won't be printed again
map.set('IN', "India")    // This won't be printed again

for (const key in map) {
   
    console.log(key)
}