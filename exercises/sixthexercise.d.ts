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
export {};
//# sourceMappingURL=sixthexercise.d.ts.map