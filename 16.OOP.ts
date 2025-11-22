//class

class Person1 {
    name:string;
    age:number;
    constructor(name:string,age:number) {
        this.name=name;
        this.age=age;
    }
}

const person1 = new Person1("John",20);
console.log(person1);

// ----------------------------------------------------------------------------//
//Accesss Modifiers
// used to control the visibility of class members(properties and methods)
// they determine the ways in which class members can be accessed from within and outside the class.
// Public , private , protected

class Person2 {

    private first :string;
    public last :string;
    protected age : number;

    constructor(first:string, last:string,age:number) {
        this.first = first;
        this.last = last;
        this.age = age;

    }
    getName() :string{
        return `${this.first} ${this.last} Age:${this.age}`
    }
}

let p1 = new Person2("John","Walt",30);
console.log(p1);
console.log(p1.getName());


class Human extends Person2{
    constructor(first:string, last:string,age:number) {
        super(first,last,age);
    }
}

const sanik = new Human("Sanika","webdev",20);
console.log(sanik);

// -------------------------------------------------------------------------------//
// Getters and Setters

class Myclass {
    private _myProperty :number = 0;

    get myProperty():number{
        return this._myProperty;
    }

    set myProperty(value:number){
        this._myProperty = value;
    }
}

const myInstance = new Myclass();

console.log(`Current value :${myInstance.myProperty}`);
myInstance.myProperty= 10;
console.log(`Current value :${myInstance.myProperty}`);

