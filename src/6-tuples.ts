//! Tuples

// types inside the array are in a certain order
let person6: [string, number, boolean] = ['mario', 20, true];

// example usecase

let hsla: [number, string, string, number];

hsla = [200, "100%", "50%", 1];

// hue, saturation, lightness, alpha

let xy: [number, number];

xy = [1, 2];

// with functions as return type

const useCoords = (): [number, number]=>{
    const lat = 100;
    const long = 50;
    return [lat, long]
}

const [lat, long] = useCoords();

// named tuples

let user6: [name: string, age: number]; 

user6 = ['Om', 20];

