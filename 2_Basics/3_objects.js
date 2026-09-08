// objects can be declared with 2 types .... 1 => literals sy no, 2 => constructor sy singleton banta hai 
// singleton apni tarah ka aik object hai 

// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "khadija",
    "full name": "kadija intizar",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS user");
}
JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());