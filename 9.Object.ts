// Objects
// Syntax :- type varName(annotations/types)={property:value}
const person : {name:string; surname:string; age:number } ={
    name : "Sanika",
    surname: "Mogal",
    age : 20
}

console.log(`Nmae: ${person.name} ${person.surname} , Age: ${person.age}`);


//Object as return type of a function parameter
function printUser() : {name:string; surname:string; age:number }{
    return{
        name:"Sanika",
        surname:"Mogal",
        age:20
    };
}
console.log(printUser());
