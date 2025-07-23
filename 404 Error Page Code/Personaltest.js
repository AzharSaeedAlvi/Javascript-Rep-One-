// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   introduce() {
//     console.log(`Hello, I'm ${this.name}`);
//   }
// }

// const charlie = new User("Charlie", 22);
// const Puth = new User("Puth", 32);
// Puth.introduce(); // Hello, I'm Charlie
// console.log(Charlie);


function User(name, age){
  this.name = name;
  this.age = age; 
  } 

const alice = new User("Alice", 27);
const bob = new User("Bob", 32); 

  console.log(alice);