// Unions are used to declare a type that can have one of several possible types.
// Unions are useful when we want to allow a variable or parameter to accept multiple types.
// the syntax for defining a union tyoe in typescript uses the pipe symbol (|).

// let password : string | number = "Something";
let password : string | number = 29;

type userInfo = {
    first:string,
    last :string,
    age:20,
}

type acc = {
    email:string,
    password:string,
}

let User : userInfo | acc = {
    email:"San@gmail.com",
    password:"pass@123",

}

const itemss :(number|string)[] = [1,2,3,4,5,"hello"];
console.log(itemss);
