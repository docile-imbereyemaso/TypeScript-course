export const persons = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' },
    { type: 'user', name: 'Wilson', age: 23, occupation: 'Ball' },
    { type: 'admin', name: 'Agent Smith', age: 23, role: 'Anti-virus engineer' }
];
const logPersons = (person) => {
    console.log(`${person.name} ${person.age} ${person.type === 'admin' ? person.role : person.occupation}`);
};
let getObjKeys = (obj) => Object.keys(obj);
function filterPersons(persons, personType, criteria) {
    return persons.filter((person) => person.type === personType).filter((person) => {
        let criteriaKeys = getObjKeys(criteria);
        return criteriaKeys.every((fieldName) => {
            return criteria[fieldName] === person[fieldName];
        });
    });
}
const filteredPersons = filterPersons(persons, 'admin', { age: 23 });
console.log(filteredPersons);
//# sourceMappingURL=sixthexercise.js.map