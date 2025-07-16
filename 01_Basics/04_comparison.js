// console.log(2>1)
// console.log(2>=1)
// console.log(2<1)
// console.log(2==1)
// console.log(2!=1)


// console.log("2" > 1);
// console.log("02">1);

// console.log(null > 0);  // False
// console.log(null == 0); // False 
// console.log(null >= 0); // True 

// console.log(undefined == 0); // Always gives false 


// === 

console.log("2" === 2);   // NOTE 

console.log(null == undefined);  // true 
console.log(null === undefined);  // false 
console.log(null == 0);  // False 
console.log(null == "");  // False 

console.log(undefined);
console.log(null);

let x = null; 

console.log(typeof x);

console.log(typeof undefinded);


console.log(undefined > 0);   // Flase 
console.log(undefined < 0);   // False 
console.log(null > 0);        // False
console.log(null < 0);        // False
console.log(null == -0);        // False    // Reason null is only looselyequal to 

console.log(null <= 0);    // true 
console.log(undefined <= 0);   // false 
console.log ( null <= -0);  // True

console.log(undefined == NaN);
console.log(null == NaN);