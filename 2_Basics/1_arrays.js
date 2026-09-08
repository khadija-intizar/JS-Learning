// Arrays 

const myArr = [9, 55, 3, 7, 24, 20]
const fruits = ["mango", "Orange", "apple"]

// console.log(fruits);

const myArr2 = new Array(8, 0, 4, 2)
// console.log(myArr[1]);

// Array methods

// myArr.push(10)
myArr.pop()
// console.log(myArr);

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);


// slice (exclude last elment ), splice (change array => array me sy elements he remove hojaty )

console.log("A ", myArr);
const myn1 = myArr.slice(1, 3)
console.log(myn1);

console.log("B ", myArr);
const myn2 = myArr.splice(1, 3)
console.log(myn2);
console.log("C ", myArr);