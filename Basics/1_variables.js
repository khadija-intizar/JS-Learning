// create some variables
const accountId = 10
let accountEmail = "khadija@gmail.com"
var accountPassword = "12345"
accountCity = "Islamabad"
let accountState;

// accountId = 34 // not allowed because we already define a const and that cannot be changed 
/* 
Note:
Only use let and const
prefer not to use var
Because of issue in block scope and functional scope 
*/

// change variable's value 
accountEmail = "deeja@gmail.com"
accountPassword = "23465"
accountCity = "London"

// print 
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]) 