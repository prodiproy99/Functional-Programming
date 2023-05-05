// There are two step
// - Define a function
// - Invoke a function

// function testF(a, b) { 
//     const result = a + b + Math.max(a, b)
//     console.log(result);

// }

// testF(2, 20);


/*
// sleep
function sleep(name) {
    console.log(`${name} is sleeping`);
}

// awake
function awake(name) {
    console.log(`${name} is awake`);
}

// Eat, name, time
function eat(name, time) {
    console.log(`${name} is taking ${time}`);
}

// walk, name, destination
function walk(name, destination) {
    console.log(`${name} is walking to ${destination}`);
}

//  study
function study(name) {
    console.log(`${name} is studying`);
} 

// work
function work(name) {
    console.log(`${name} is working`);
}
// student lifecycle
function studentsLifecycle(name){
    awake(name)
    eat(name, 'breakfast') 
    work(name)
    eat(name, 'lunch')
    eat(name, 'dinner')
    sleep(name) 
}
console.log('Students Lifecycle');
console.log('---------------------');
studentsLifecycle('Aporna')
console.log('---------------------');
studentsLifecycle('Puja')

function jobholderLifcycle(name){
    awake(name)
    eat(name, 'breakfast')
    walk(name, 'office')
    work(name)
    eat(name, 'home')
    eat(name, 'dinner')
    sleep(name)
}


console.log('Jobholder Lifecycle');
jobholderLifcycle('Prodip R')
console.log('---------------');

jobholderLifcycle('Dipto R')
console.log('---------------');

jobholderLifcycle('Hridoy R')
console.log('---------------');

jobholderLifcycle('Joy R')
console.log('---------------');

jobholderLifcycle('Utpol R')
console.log('---------------');

jobholderLifcycle('Aditto R')
console.log('---------------');

*/


/*
function sum(a, b){
    return a + b;
}
function sub(a, b){
    return a % b;
}
function times(a, b){
    return a * b;
}

const a = 10;
const b = 20;

const r = times(sum(a, b), sub(a, b))

console.log(r);

*/

/**
 * Benifits
 * - we can store functions in a variable
 * - we can store function inside an object / array
 * - we can pass function as an argument
 * - we can also return a function from another function
 */

// Prove - function is a value
function testFunction() {
    console.log('I am a test function');
}

const fn = testFunction;
console.log(fn);
fn()

const ar = [fn, testFunction];
const o = {
    fn: testFuntion
}

function returnFn(){
    return testFunction;
}