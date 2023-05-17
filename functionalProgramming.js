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
// function generateTwoRandomNumber(max, cb) {
//     const random1 = Math.floor(Math.random() * max); //const
//     const random2 = Math.floor(Math.random() * max); //const
//     const result = cb(random1, random2);
//     return result;
// }

// // const cb = function(rand1, rand2){
// //     console.log(rand1, rand2);
// // }

// generateTwoRandomNumber(100, (rand1, rand2) => {
//     console.log(rand1, rand2);
// })

// console.log(generateTwoRandomNumber(1000, (rand1, rand2) => rand1 + rand2));
// console.log(generateTwoRandomNumber(10, (rand1, rand2) => rand1 * rand2));
// console.log(
//     generateTwoRandomNumber(1000, (
//         rand1, rand2) => rand1 * rand2 + rand2 * rand1
//     ));

/**
function power(p) {
    return function (n) {
        let result = 1;
        for (let i = 1; i <= p; i++) {
            result *= n;
        } 
        return result;
    }
}

const sqr = power(2)
const cube = power(3)
const power8 = power(8)

console.log('SQR', sqr);
console.log('Cube', cube);
console.log('power8', power8);

console.log(power8(3));
console.log(power8(2));
console.log(power8(4));

 */

/**
 * global
 * local
 * block
 */

{
    const notScopped = "scope";

    {
        {
            {
                console.log(notScopped);
            }
        }
    }
}
