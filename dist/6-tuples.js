"use strict";
//! Tuples
// types inside the array are in a certain order
let person6 = ['mario', 20, true];
// example usecase
let hsla;
hsla = [200, "100%", "50%", 1];
// hue, saturation, lightness, alpha
let xy;
xy = [1, 2];
// with functions as return type
const useCoords = () => {
    const lat = 100;
    const long = 50;
    return [lat, long];
};
const [lat, long] = useCoords();
// named tuples
let user6;
user6 = ['Om', 20];
