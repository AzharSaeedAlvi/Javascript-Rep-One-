const accountID = 144553    // const - cannot be changed
let accountEmail = "Randomemail@abcd.com" 
var acccountPassword = "12345"
accountCity = "Jaipur"    // If we don't added anything infront of the word it automatically reserves it in the memory as a variable.
let accountState;

// accountID = 2
// TO ADD A COMMENT SIMPLY PRESS CTRL + '/'
// IF YOU SIMPLY WRITE LOG AND YOU PRESS ENTER IT WILL AUTOMATICALLY GIVE YOU console.log();
// Semi-colons are not required in JS
console.log(accountID);     

console.table([accountID, accountEmail,acccountPassword,accountCity,accountState])

/* Difference between var and let and why do we not use var? 

Because of Block Scope - If somebody used the same variable name under a scope in a different file it used to update the variable in all the places, therefor now we prefer using 'let' instead of 'var' 
Scope = Curly Braces {}

*/ 

// If no value is assigned to a variable it will alot an undefined value to the variable. 
