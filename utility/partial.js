const updateUser = (user, propsToUpdate) => (Object.assign(Object.assign({}, user), propsToUpdate));
const updatedObject = updateUser({ id: 12, name: "docile", email: "imbereyemaso@gmail.com", age: 20 }, { age: 45, name: "Kamana Jean" });
console.log(updatedObject);
export {};
//# sourceMappingURL=partial.js.map