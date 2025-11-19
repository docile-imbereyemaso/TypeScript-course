function describeManagerEmployee(me) {
    return `${me.name} (ID: ${me.employeeId}) manages a team of ${me.teamSize} people`;
}
console.log(describeManagerEmployee({ name: "Bob", employeeId: 123, teamSize: 5 }));
export {};
//# sourceMappingURL=question6.js.map