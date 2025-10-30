export const persons = [
    { type: 'user', name: 'Max Mustermann', age: 25, occupation: 'Chimney sweep' },
    { type: 'admin', name: 'Jane Doe', age: 32, role: 'Administrator' },
    { type: 'user', name: 'Kate Müller', age: 23, occupation: 'Astronaut' },
    { type: 'admin', name: 'Bruce Willis', age: 64, role: 'World saver' }
];
function isAdmin(person) {
    return person.type === "admin";
}
function isUser(person) {
    return person.type === "user";
}
const admins = persons.filter(isAdmin);
const users = persons.filter(isUser);
// console.log(users);
// console.log(admins);
persons.forEach((person) => {
    let additionalInformation = "";
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    else if (isUser(person)) {
        additionalInformation = person.occupation;
    }
    console.log(`-${person.name} - ${person.age} - ${additionalInformation}`);
});
//# sourceMappingURL=fourthexercise.js.map