//! Type guards

type Id = number|string;

function swapIdType(id: Id) {
    if(typeof id !== 'number'){
        // string
        return parseInt(id)
    }else{
        // number
        return id.toString()
    }
}

const idOne = swapIdType(1);
console.log(typeof(idOne));



// tagged interface

interface User10 {
    type: 'user',
    username: string,
    email: string,
    id: Id
}
interface Person10 {
    type: 'person'
    firstname: string,
    age: number,
    id: Id
}

function logDetails(value: User10|Person10){
    // canot use type of here
    if(value.type === 'user'){
        console.log(value.email);
        console.log(value.username);
    }
    if(value.type === 'person'){
        console.log(value.firstname);
        console.log(value.age);
    }

}

console.log(logDetails({type: 'user',  username: 'mario', email: 'mario@gmail.com', id: 1}))