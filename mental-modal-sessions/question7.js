function applyOperation(a, b, operation) {
    return operation(a, b);
}
const add = (x, y) => x + y;
const multiply = (x, y) => x * y;
console.log(applyOperation(10, 5, add));
console.log(applyOperation(10, 5, multiply));
export {};
//# sourceMappingURL=question7.js.map