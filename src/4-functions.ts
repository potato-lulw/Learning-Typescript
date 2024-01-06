//! functions

// we have to explicitly mention the types of the variables to avoid accepting wrong parameters

// function addTwoNumber(a: number, b: number){
//     return a + b;
// }

// we can also mention the return type using a colen after the variable declaration

function addTwoNumber(a: number, b: number): number{
    return a + b;
}

// using arrow functions
const subtractTwoNumber = (a: number, b: number): number => {
    return a - b;
}

console.log(addTwoNumber(1,2));
console.log(subtractTwoNumber(1,2));

// function with an array 

// if there was no return type, it returns void 
const addAllNumbers = (items: number[]): number => {
    const sum = items.reduce((a,b) => a + b, 0);
    return sum;
}

console.log(addAllNumbers([1,2,3,4,5]));


// return type inference

const formatGreeting = (name: string, greeting: string) : string => {
    return `${greeting}, ${name}`;
}

console.log(formatGreeting('om', "Hello"));