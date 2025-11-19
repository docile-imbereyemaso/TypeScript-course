interface Employee{
    name:string;
    employeeId:number;
}

interface Manager{
    teamSize:number
}

type ManagerEmployee = Employee & Manager;

function describeManagerEmployee(me:ManagerEmployee):string {
  return `${me.name} (ID: ${me.employeeId}) manages a team of ${me.teamSize} people`;
}

console.log(describeManagerEmployee({ name: "Bob", employeeId: 123, teamSize: 5 }));
