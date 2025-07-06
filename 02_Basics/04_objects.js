// HERE WE WILL TALK ABOUT SINGLETON OBJECT (i.e. using constructor)


const tinderUser = new Object()  // Singleton object

// const tinderUser = {}     // Non-singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


// Taking Object inside object


const regularUser = {

    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Azhar",
            lastname: "Alvi"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);


const obj1 ={1: "a", 2: "b"}
const obj2 ={3: "a", 4: "b"}

// const obj3 = {obj1, obj2 }
const obj3 = Object.assign({}, obj1, obj2)    // READ DOCUMENTATION FOR THIS
console.log(obj3);