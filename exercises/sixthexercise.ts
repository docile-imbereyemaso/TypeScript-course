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
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },
    { type: 'user', name: 'Wilson', age: 23, occupation: 'Ball' },
    { type: 'admin', name: 'Agent Smith', age: 23, role: 'Anti-virus engineer' }
];

const logPersons=(person:Person)=>{
    console.log(`${person.name} ${person.age} ${person.type==='admin'?person.role:person.occupation}`)
}

let getObjKeys=<T>(obj:T)=>Object.keys(obj) as (keyof T)[];
function filterPersons(persons:Person[],personType:User['type'],criteria:Partial<Omit<User,'type'>>):User[];

function filterPersons(persons:Person[],personType:Admin['type'],criteria:Partial<Omit<Admin,'type'>>):Admin[];

function filterPersons(persons:Person[],personType:Person['type'],criteria:Partial<Person>):Person[]{
    return persons.filter((person)=>person.type===personType).filter((person)=>{
        let criteriaKeys=getObjKeys(criteria);
        return criteriaKeys.every((fieldName)=>{
            return criteria[fieldName]===person[fieldName];
        })
    })
}

const filteredPersons=filterPersons(persons,'admin',{age:23});
console.log(filteredPersons);