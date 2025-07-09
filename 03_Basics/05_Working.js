// Code to test in Inspect>Sources>Snippets


function one(){
    console.log("one")
    two()
}

function two(){
    console.log("two");
    three()
    
}

function three(){
    console.log("three")
}

one()

// observe the call stack

//Note created in iPad Notes 