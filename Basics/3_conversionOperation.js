// we are checking conversions
let score = undefined 
let score1 = "33gvf"   
let score2 = null      

console.log(typeof score);    // undefined
console.log(typeof (score1)); // string
console.log(typeof (score2)); // object

let ValueInNumber = Number(score)
let ValueInNumber1 = Number(score1)
let ValueInNumber2 = Number(score2)

//console.log(typeof ValueInNumber)   // number
//console.log(typeof ValueInNumber1)  // number
//console.log(typeof ValueInNumber2)  // number

//console.log(ValueInNumber);     // NaN
//console.log(ValueInNumber1);    // Nan
//console.log(ValueInNumber2);    // 0

// Notes
// "33" => 33
// "33gvf" => NaN not a number
// true = 1; false = 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);  

// 1 => true; 0 => false
// "" => false
// "Khadija" => true 

let aNumber = 20
let stringNumber = String(aNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
