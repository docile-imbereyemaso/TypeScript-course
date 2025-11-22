function isString(value:any):value is string{
    return typeof value ==="string";
}

function isNumber(value:any):value is number{
    return typeof value ==="number";
}

const translate =(value:number|string):string=>{
    if((isString(value)))return value.toUpperCase();
    return value.toFixed(2);
}



function identity<T>(value:T):T{
    return value;
}
console.log(identity({id:23,name:"Docile"}));
console.log(identity(23));
console.log(identity("name"));
const result  =identity<number>(45);

function gettotal(...rest:number[]):number{
    return rest.reduce((acc,curr)=>acc+curr,0);
}
console.log(gettotal(1,2,3,4,5,5,6,6,7,7));

type Dictionary ={
    [key:string]:string;
}

const person:Dictionary ={
    name:"Docile Imbereyemaso",
    status:"married"
}

console.log(person);

function reverse(value:string):string;
function reverse(value:number):number;
function reverse(value:string|number):string|number{
  if(isString(value)){
    return value.split("").reverse().join("");
  }
  return Number(value.toString().split("").reverse().join(""));
}
console.log(reverse("docile"));
console.log(reverse(345));