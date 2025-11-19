function describeInput(input) {
    if (typeof input === "string") {
        return `You have provided string: ${input}`;
    }
    return `You have provided number: ${input}`;
}
console.log(describeInput(34));
export {};
//# sourceMappingURL=question2.js.map