const persons = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];
persons.forEach((user) => {
    let additionalInformation;
    if ("role" in user) {
        additionalInformation = user.role;
    }
    else {
        additionalInformation = user.occupation;
    }
    console.log(`${user.name} - ${user.age} - ${additionalInformation}`);
});
export {};
//# sourceMappingURL=thirdexercise.js.map