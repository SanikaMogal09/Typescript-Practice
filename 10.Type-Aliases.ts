// Type Aliases
type User = {
    name:string;
    age:number;
    email?:string; // optional property
    readonly location:string; //readonly property
};

const printUserInfo = (user:User)=>{
    return `Name: (${user.name})  Age: (${user.age})  Location: (${user.location})`;
};

const user:User ={
    name:"Bob",
    age: 20,
    location: "Dubai",
    // email: "bob@gmail.com"
}
console.log(`Name: ${user.name} age: ${user.age} location: ${user.location} email: ${user.email}`);


const result1 = printUserInfo({name:"Alex",age: 20, location:"USA"});
console.log(result1);

