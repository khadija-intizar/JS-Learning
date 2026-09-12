// difference b/w global scope and block scope, {} <= these are called scope
/*  Note:
    In node there is different scopes and in browser console there are different scopes
 */
// global scope 
let a = 21

// block scope 
if (true){
    const a = 10
    let b = 40
    // console.log("INNER: ", a);
    
}

// console.log(a);
// console.log(b);

// nested function
function one(){
    const username = "khadija"

    function two(){
        const website = "youtube"
        // console.log(username);
        // console.log(website);

    }
    // console.log(website);

    two()

}

one()

// nested if condition
if (true) {
    const username = "khadija"
    if (username === "khadija") {
        const website = " youtube"
        console.log(`combine ${username} and ${website}`);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++

// different functions declerations
console.log(addone(5))

function addone(num){
    return num + 1
}

const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5))