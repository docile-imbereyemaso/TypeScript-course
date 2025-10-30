interface User {
    name: string;
    age: number;
    occupation: string;
}
interface Admin {
    name: string;
    age: number;
    role: string;
}
type Person = User | Admin;
export declare const persons: Person[];
export {};
//# sourceMappingURL=secondexercise.d.ts.map