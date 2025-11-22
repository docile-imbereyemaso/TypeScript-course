function isString(value) {
    return typeof value === "string";
}
function isNumber(value) {
    return typeof value === "number";
}
const translate = (value) => {
    if ((isString(value)))
        return value.toUpperCase();
    return value.toFixed(2);
};
function identity(value) {
    return value;
}
console.log(identity({ id: 23, name: "Docile" }));
console.log(identity(23));
console.log(identity("name"));
const result = identity(45);
function gettotal(...rest) {
    return rest.reduce((acc, curr) => acc + curr, 0);
}
console.log(gettotal(1, 2, 3, 4, 5, 5, 6, 6, 7, 7));
const person = {
    name: "Docile Imbereyemaso",
    status: "married"
};
console.log(person);
function reverse(value) {
    if (isString(value)) {
        return value.split("").reverse().join("");
    }
    return Number(value.toString().split("").reverse().join(""));
}
console.log(reverse("docile"));
console.log(reverse(345));
export {};
//# sourceMappingURL=test.js.map