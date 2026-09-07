// primitive datatype
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 50
const name = "Khadija"
const deciScore = 50.5

let isLoggedIn = false
let temp = null
let email;

const id = Symbol('123')
const otherId = Symbol('123')

// console.log(id == otherId);

const bigNumber = 24365383946382n

// Non-primitive (reference) 
// Array, Objects, Functions

// non-primitive ka datatype object he ata hai

// Array
const fruits = ["Apple", "Banana", "Mango"]
// console.log(fruits);

// Objects // always in {}
let myObj = {
    name: "khadija",
    age: 21,
}
// console.log(myObj);

// Functions
let myFunction = function() {
    // console.log("My name is khadija");
}
myFunction()

console.log(typeof id);

// **************************** Stack and Heap Memory ********************************

//stack (use in primitive or is k andar copy mily ga) & heap (use in non-primitive or is k andar reference)
//Stack Example
let myName = "Khadija Intizar"
let mySisterName = myName
mySisterName = "Ayesha Intizar"
console.log(mySisterName);

// heap example
let user1 = {
    name: "Ali",
    email: "ali@gmail.com"
}

let user2 = user1
user2.name = "Hira"
console.log(user1.name);

// Another Example 
let myBikeColor = "Blue"
let otherBikeColor = myBikeColor
otherBikeColor = "black"
console.log(myBikeColor);
console.log(otherBikeColor);

let obj1 = {
    bikeNum: 486,
    bikeName: "Kawasaki"
}

let obj2 = obj1
obj2.bikeName = "CD70"

console.log(obj2.bikeName);