// simple comparisons with same DT
// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 == 2);
// console.log(2 != 3);

// comparison with different datatypes 
// console.log("2" > 1);
// console.log("02" < 2); // a bit problem with these

// avoid these type of comparisons
// comparison with null
console.log( null > 0);
console.log( null < 0); // sometimes convert with NaN and 0
console.log( null == 0);
console.log( null >= 0);

// comparison with undefined
console.log(undefined > 0); // always false 

// strict check ===
console.log("2" === 2);
