//regular function
function addOne(num:number) {
    return num + 1;
}

const res = addOne(3);
console.log(res);

//Arrow function
const double = (x:number,y:number) => x*y;
const result = double(2,10);
console.log(result);

//default parameters
function greet(person : string="Anonymous"){
    return `hello ${person}`;
}
const ress = greet();
// const ress = greet("Sanika");
console.log(ress);
