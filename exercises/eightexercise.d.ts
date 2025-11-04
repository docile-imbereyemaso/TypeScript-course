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
export type ApiResponse<T> = {
    status: 'success';
    data: T;
} | {
    status: 'error';
    error: string;
};
export declare function requestAdmins(callback: (response: ApiResponse<Admin[]>) => void): void;
export declare function requestUsers(callback: (response: ApiResponse<User[]>) => void): void;
export declare function requestCurrentServerTime(callback: (response: ApiResponse<number>) => void): void;
export declare function requestCoffeeMachineQueueLength(callback: (response: ApiResponse<number>) => void): void;
export {};
//# sourceMappingURL=eightexercise.d.ts.map