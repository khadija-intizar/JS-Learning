// functions

function myFucntion() {
    console.log("K")
    console.log("h")
    console.log("a")
    console.log("d")
    console.log("i")
    console.log("j")
    console.log("a") 
}

// myFucntion()

// function AddTwoNumbers(num1, num2) {
//     console.log(num1 + num2);
// }

function AddTwoNumbers (num1, num2){
    // let result = num1 + num2
    // return result
    return num1 + num2
}

const result = AddTwoNumbers(3, 9)
// console.log("Result: ", result);


function loginUserMessage(username = "Dolly"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("khadija"))
// console.log(loginUserMessage("khadija"))


function calculateCartPrice(val1, val2, ...num1){
    // return val1
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))
// object 
const user = {
    username: "khadija",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "ayesha",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
