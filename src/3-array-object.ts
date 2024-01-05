
//! Arrays
// array without inference

let strArr : string[] = ['this', 'is', 'an', 'array'];
let ages: number[] = [1, 2, 3, 4];

strArr.push('push');
ages.push(5);


// array type inference 

let fruits = ['Banana', 'Apple', 'Orange']
const f = fruits[1];


// more than one type inference (union types)
let things = [1, "wow", true];
// console.log(typeof(things)); // -> object

let t = things[0];


//! Object literals 

let user : { firstName: string, lastName: string, age: number, id: number} = {
    firstName: "Jean",
    lastName: "Paul",
    age : 28,
    id : 1
}

user.id = 2;

console.log(user);


// type inference with object literals 

let person = {
    firstName: 'Rahul',
    lastName: 'Mehta',
    age: 20,
    email: 'mehta@gmail.com'
}

