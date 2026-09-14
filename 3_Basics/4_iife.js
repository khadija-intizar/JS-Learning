// Immediately Invoked Function Expressions (IIFE)
// jo immediately call hojaye function 
/* global scope k pollution sy problem hoti hai toh usky variables ya declarations ko hatany k liye 
iife ka use krty hain 
*/ 

function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
}
chai();

// second way 
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// third way 
((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('khadija')