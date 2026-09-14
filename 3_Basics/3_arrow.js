// arrow functions and this keyword

const user = {
    username: "khadija",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "khadija"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "khadija"
//     console.log(this.username);
// }

// arrow function apna keyword use nhy krti wo reference leti hai 
const chai =  () => {
    let username = "khadija"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// santax 
// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "khadija"})

console.log(addTwo(3, 4))

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()