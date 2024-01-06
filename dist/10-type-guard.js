"use strict";
//! Type guards
function swapIdType(id) {
    if (typeof id !== 'number') {
        // string
        return parseInt(id);
    }
    else {
        // number
        return id.toString();
    }
}
const idOne = swapIdType(1);
console.log(typeof (idOne));
function logDetails(value) {
    // canot use type of here
    if (value.type === 'user') {
        console.log(value.email);
        console.log(value.username);
    }
    if (value.type === 'person') {
        console.log(value.firstname);
        console.log(value.age);
    }
}
console.log(logDetails({ type: 'user', username: 'mario', email: 'mario@gmail.com', id: 1 }));
