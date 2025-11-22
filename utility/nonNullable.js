function processValue(value) {
    if (value === null || value === undefined) {
        throw new Error("value can't be null or undefined");
    }
    return value;
}
const result = processValue(34);
console.log(result);
console.log(processValue(undefined));
export {};
//# sourceMappingURL=nonNullable.js.map