// // Pure function
// function sum(a, b){
//     return a+b;
// }

// sum(2, 3)

// // impure function
// function log(msg){
//     console.log(msg);
// }

/**
 * Higher order function
 * - function can be passed as an argument
 * - function can be return from another function
 */

/**
 * Hidden concepts
 * - Scope
 * - Closure
 * - Function Context
 * - Hoisitng
 */

// Higher Order Function
function generateTwoRandomNumber(max, cb) {
    const random1 = Math.floor(Math.random() * max); //const
    const random2 = Math.floor(Math.random() * max); //const
    const result = cb(random1, random2);
    return result;
}

generateTwoRandomNumber(100, (rand1, rand2) => {
    console.log(rand1, rand2);
})

console.log(generateTwoRandomNumber(1000, (rand1, rand2) => rand1 + rand2));
console.log(generateTwoRandomNumber(10, (rand1, rand2) => rand1 * rand2));
console.log(
    generateTwoRandomNumber(1000, (
        rand1, rand2) => rand1 * rand2 + rand2 * rand1
    ));

