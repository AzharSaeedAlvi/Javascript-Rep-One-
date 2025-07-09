// // For loop Basic 

// for(let index = 0; index<10; index++){
//     const element = index;
// console.log(element);
// }

// // Loop inside a loop

// for(let i = 0; i<=10; i++){
//     console.log(`Outer Loop ${i}`);
//  for( let j = 0; j <= 10; j++){ 

//     console.log(`Inner Loop value ${j} and outer loop value ${i} `);

// }
// }


// // Math Tables

// for(let i = 1; i<=10; i++){
//     console.log(`Outer Loop ${i}`);
//  for( let j = 1; j <= 10; j++){ 

//     // console.log(`Inner Loop value ${j} and outer loop value ${i} `);

//     console.log(i + '*' + j + '=' + i*j );
// }
// }


// Working with for loop and ARRAY 

// let myArray = ["flash", "batman", "superman"]

// for (let index = 0; index <= myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);  
// }


// Note - In JS we do not have out of bounce error but we do obtain undefined. 


// +++++++++++++++++++++++++++++ BREAK AND CONTINUE +++++++++++++++++++++++++++++++++++++++


// for (let index = 1; index <= 20; index++) {
// if (index == 5) {
//     console.log(`Detected 5`);
//     break;                                       // As soon as this hits, the loop flow is broken and we come out of the loop
    
// }
//     console.log(`Value of i is ${index}`);
    
// }


for (let index = 1; index <= 20; index++) {
if (index == 5) {
    console.log(`Detected 5`);
    continue;                                      // Ignore once.  Please omit this one time mistake scenario
    
}
    console.log(`Value of i is ${index}`);  // HERE YOU WILL OBSERVE THAT 5 is not printed (i.e. it gets ignored)
    
}







