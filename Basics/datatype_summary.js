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
