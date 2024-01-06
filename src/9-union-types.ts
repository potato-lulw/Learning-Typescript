//! Union types

let someId: number | string;

someId = 5;
someId = '5';

let email : string | null = null;

email = 'email@example.com';



// using union types with type aliases

type ID = number | string;
let anotherID: ID;
anotherID = 'ID123';
anotherID = '123';

// one problem 

function swapIdType(id: ID): ID {
    // parseInt(id) // -> not allowed because id can be a number 
    parseInt("5") //-->  allowed 
    return id
}

// a way around this is using typeguards