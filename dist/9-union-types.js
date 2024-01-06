"use strict";
//! Union types
let someId;
someId = 5;
someId = '5';
let email = null;
email = 'email@example.com';
let anotherID;
anotherID = 'ID123';
anotherID = '123';
// one problem 
function swapIdType(id) {
    // parseInt(id) // -> not allowed because id can be a number 
    parseInt("5"); //-->  allowed 
    return id;
}
// a way around this is using typeguards
