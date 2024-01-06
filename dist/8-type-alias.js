"use strict";
//! Type alias
const getRandomColor = () => {
    let r = Math.ceil(Math.random() * 255);
    let g = Math.ceil(Math.random() * 255);
    let b = Math.ceil(Math.random() * 255);
    return [r, g, b];
};
console.log(getRandomColor());
const userOne = { name: 'Mario', age: 20 };
function formatUser(user) {
    console.log(`${user.name}, ${user.age}`);
}
formatUser(userOne);
