const users = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];
export function logPerson(user) {
    console.log(` - ${user.name}, ${user.age}`);
}
console.log('Users:');
users.forEach(logPerson);
users.forEach(users => console.log(`-${users.name} - ${users.age}`));
//# sourceMappingURL=firstexercise.js.map