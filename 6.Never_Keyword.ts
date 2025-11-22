//never 
//A function that always throws an error 
function throwError(msg:string): never {
    throw new Error(msg);
}

//A function that has an infnite loop 
function infiniteLoop():never {
    while(true){};
}

//A variable that can never have a value
let x : never;
function neverReturns():never {
    while(true){};
}
x = neverReturns(); //compile time error
