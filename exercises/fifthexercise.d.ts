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
export declare const persons: Person[];
export declare const isAdmin: (person: Person) => person is Admin;
export declare const isUser: (person: Person) => person is User;
export declare function logPerson(person: Person): void;
export declare function filterUsers(persons: Person[], criteria: Partial<User>): User[];
export {};
//# sourceMappingURL=fifthexercise.d.ts.map