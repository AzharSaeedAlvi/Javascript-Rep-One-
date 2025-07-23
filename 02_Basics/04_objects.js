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









// ------------------------------------------------------ SINGLETON USING A CLASS -----------------------------------------------------------------


class Singleton{
    constructor(){                                                           // SINCE WE ARE USING A LOGIC WE WILL HAVE TO USE CONSTRUCTOR.
        if(Singleton.instance){
                return Singleton.instance;
        }
            this.data = {username: "CD", isLoggedIn: flase};
            Singleton.instance = this;
        }
    }
const a = new Singleton();    // will go to the Singleton class then it will go to the this.data line and store the data
const b = new Singleton();    // will go to the first if statement and return back as the property Singleton.instance has already been defined.
console.log(a===b);           // will return true
















//------------------------------------------------------------ NOTES RELATED TO CONSTRUCTOR -------------------------------------- // 

//  Constructor is a special method inside JS calss that is automatically called when you create a new object using 'new' keyword.

class Dog {}
const d = new Dog()

// The above is silently interpreted as :

class Dog {
  constructor() {}
}

// NOTE - WHEN YOU WNAT OT PASS ARGUMENTS OR ADD LOGIC - LIKE SINGLETON CHECKS --- YOU NEED TO DEFINE YOUR OWN CONSTRUCTOR. 

class Person{
    constructor(name, age){ 
        this.name = name;         // Sets object name property   // this refers to the object that is being created.
        this.age = age;           // Sets object's age property
    }
}

const p1 = new Person("Alice", 25);
console.log(p1.name);   // Alice 
console.log(p1.age);    // 25



//Think of a class like a blueprint for a car.
// The constructor is the assembly process — where you add a color, engine, and tires before the car hits the road 🚗

class Car {
  constructor(brand, color, engineType) {        // The assembly line that puts together each new car
    this.brand = brand;         // e.g., "Toyota"
    this.color = color;         // e.g., "Red"
    this.engineType = engineType; // e.g., "Electric"
  }

  describe() {
    console.log(
      `This is a ${this.color} ${this.brand} with a ${this.engineType} engine.`
    );
  }
}
const myCar = new Car("Tesla", "black", "electric");
myCar.describe(); 
// Output: This is a black Tesla with an electric engine.

const yourCar = new Car("Ford", "blue", "gasoline");
yourCar.describe();
// Output: This is a blue Ford with a gasoline engine.

