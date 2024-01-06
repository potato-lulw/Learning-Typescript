//! Type alias

// example with tuples
type Rgb = [number, number, number];

const getRandomColor = (): Rgb => {
    let r = Math.ceil(Math.random() * 255);
    let g = Math.ceil(Math.random() * 255);
    let b = Math.ceil(Math.random() * 255);
    return [r, g, b];
}

console.log(getRandomColor());

// example with objects

type User = {
    name: string,
    age: number
}

const userOne: User = {name : 'Mario', age: 20};

function formatUser(user: User): void {
    console.log(`${user.name}, ${user.age}`)
}

formatUser(userOne)