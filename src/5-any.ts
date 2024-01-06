
//! Any type

// basically reverting back to JS where any variable can have any datatype


let age: any;

age = 30;
age = false;

// no errors

// Any type with arrays

let lists: any = ['wow', 2, true];


// Function with any type

const addTogether = (value: any) : any => {
    return value+value
};

console.log(addTogether('hello'));
console.log(addTogether(1));
console.log(addTogether('1' + 1));


