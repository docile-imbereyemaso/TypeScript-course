type T4 = NonNullable<string|number|"undefine">;
type T5 = NonNullable<string[]|"null"|"undefined">;

function processValue<T>(value:T):NonNullable<T>{
    if(value ===null || value ===undefined){
        throw new Error("value can't be null or undefined");
    }
    return value as NonNullable<T>
}

const result = processValue<number>(34);
console.log(result);
console.log(processValue(undefined));