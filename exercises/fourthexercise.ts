interface User {
    type: 'user';
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    type: 'admin';
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' }
];
function isAdmin(person:Person):person is Admin{
    return person.type==="admin";
}
function isUser(person:Person):person is User{
    return person.type ==="user";
}
const admins = persons.filter(isAdmin);
const users = persons.filter(isUser);
// console.log(users);
// console.log(admins);

persons.forEach((person:Person)=>{
     let additionalInformation:string ="";
    if(isAdmin(person)){
        additionalInformation = person.role;
    }
    else if(isUser(person)){
        additionalInformation = person.occupation;
    }
    
    console.log(`-${person.name} - ${person.age} - ${additionalInformation}`);
});