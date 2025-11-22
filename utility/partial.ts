interface User{
    id:number;
    name:string;
    email:string;
    age:number
}

const updateUser = (user:User,propsToUpdate:Partial<User>):User=>({...user,...propsToUpdate});

const updatedObject = updateUser({id:12,name:"docile",email:"imbereyemaso@gmail.com",age:20},{age:45,name:"Kamana Jean"});
console.log(updatedObject);