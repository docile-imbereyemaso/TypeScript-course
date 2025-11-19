interface User{
    name:string;
    age:number;
    email:string

}

function introduceUser(user:User):string {
  return `Hello, my name is ${user.name}, I am ${user.age} years old, and my email is ${user.email}`;
}

console.log(introduceUser({ name: "Alice", age: 28, email: "alice@example.com" }))