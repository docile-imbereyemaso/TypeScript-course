function combine(...rest) {
    let total = 0;
    let str = '';
    rest.forEach((arg) => {
        if (typeof arg === "string") {
            str += arg;
        }
        else if (typeof arg === "number") {
            total += arg;
        }
    });
    return [total, str];
}
console.log(combine(3, 'Happy', 2, 1, ' New Year'));
export {};
//# sourceMappingURL=restParameter.js.map