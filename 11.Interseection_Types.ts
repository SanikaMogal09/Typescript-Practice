// An intersection types is a wwway to combine multiple types into a single type that includes all the properties and methods of each constituent type . An intersection type is denoted by the & symbol.

type UserInfo = {
    first: string;
    last : string;
    age :number;

};

type AccDetails ={
    email:string;
    password:string;
}

type Userr = UserInfo & AccDetails ; //intersection type

const sanika : Userr = {
    first:"Sanika",
    last:"Mogal",
    age:20,
    email:"San@gmail.com",
    password:"hello#123"
};
console.log(sanika);
