// Strings 
const name = "Ayesha"
const emailId = 5
console.log(`My name is ${name} and my email id is ${emailId}`);

// another way to declare a string is 
const myName = new String('Khadija_is_my_name')
console.log(myName[0])

/*
we use some methods for example:
length, toUpperCase, charAt, indexOf, substring, slice, trim, replace, trim, include, 
split. Others on mdn 
*/
console.log(myName.length);
console.log(myName.__proto__);
console.log(myName.toUpperCase()); // convert to all upper case 
console.log(myName.charAt(4)); // position py character batata hai 
console.log(myName.indexOf('a')); // position batata hai 

const newString = myName.substring (0, 5) // last wala char not include
console.log(newString);

const otherString = myName.slice(-18, 5)  // reverse
console.log(otherString);

// trim method 
const colorName = "    pink    "
console.log(colorName);
console.log(colorName.trim()); //ignore spaces

// replace method
const url = "https//.google.com"
console.log(url.replace('.', 'my')); // replace with other name or char

// include method
const user1 = new String('You are very pretty')
console.log(user1.includes('mine'));   // ir checks whether the word present or not 

// converted into array using split 
console.log(myName.split('_'));  // it separate the string on the basis of something 


let str1 = "I love nature"
let str2 = " Because it is peaceful"
// console.log(str1.concat(str2));
console.log(`${str1}, ${str2}`);
