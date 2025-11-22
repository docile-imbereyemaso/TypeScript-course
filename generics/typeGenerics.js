var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const user = {
    data: {
        name: "docile Imbereyemaso",
        email: "imbereyemaso@gmail.com",
        isActive: true
    },
    isError: false
};
const blog = {
    data: { title: "hello world" },
    isError: false
};
const example = {
    data: { status: 400 },
    isError: true
};
// generic on function 
const getRandomElement = (items) => {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
};
const result = (getRandomElement);
console.log(result([1, 2, 3, 34, 4, 4]));
// use generic to define fetch function
const makeFetch = (url) => __awaiter(void 0, void 0, void 0, function* () {
    return fetch(url).then((res) => res.json());
});
// c
// use generic function to addUID;
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
const docOne = addUID({ name: "docile", age: 20 });
console.log(docOne);
const shppingList = {
    id: 23,
    name: "shopping list",
    data: [
        {
            productName: "Dodd",
            id: 12
        }
    ]
};
console.log(shppingList);
const user3 = {
    id: 12,
    name: "docile Imbereyemaso",
    data: {
        title: "docile",
        status: "single"
    }
};
console.log(user3);
//
class Counter {
    increment() {
        Counter.count++;
    }
    static getCount() {
        return this.count;
    }
}
Counter.count = 0;
const counter = new Counter();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(Counter.getCount());
function identity(value) {
    return value;
}
const ident = identity("docile");
console.log(ident);
var Color;
(function (Color) {
    Color["redd"] = "redd";
    Color["green"] = "green";
    Color["red"] = "red";
})(Color || (Color = {}));
;
const red = Color.red;
console.log(red);
const names = "docile";
//first way of typecasting using <>;
const strLength = names.length;
console.log(strLength);
const str = names.toUpperCase();
console.log(str);
export {};
//# sourceMappingURL=typeGenerics.js.map