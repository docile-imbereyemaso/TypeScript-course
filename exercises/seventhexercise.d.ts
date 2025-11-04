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
type PowerUser = Omit<User, "type"> & Omit<Admin, "type"> & {
    type: 'powerUser';
};
export type Person = User | Admin | PowerUser;
export declare const persons: Person[];
export declare function logPerson(person: Person): void;
export {};
//# sourceMappingURL=seventhexercise.d.ts.map