type ApiResponse<Data extends object ={status:number}>={
    data:Data;
    isError:boolean;
}


type UserResponse = ApiResponse<{name:string,email:string,isActive:boolean}>;

const user:UserResponse={
    data:{
        name:"docile Imbereyemaso",
        email:"imbereyemaso@gmail.com",
        isActive:true
    },
    isError:false
}

type BlogResponse  = ApiResponse<{title:string}>;
const blog:BlogResponse ={
    data:{title:"hello world"},
    isError:false
}

const example:ApiResponse ={
    data:{status:400},
    isError:true
}
// generic on function 


const getRandomElement=<T>(items:T[]):T=>{
    let randomIndex = Math.floor(Math.random()*items.length);
    return items[randomIndex]
}

const result =getRandomElement<number>;
console.log(result([1,2,3,34,4,4]));

// use generic to define fetch function

const makeFetch =async <Data extends object>(url:string):Promise<Data>=>{
    return fetch(url).then((res)=>res.json());
}

// c


// use generic function to addUID;

const addUID =<T extends {name:string}>(obj:T):T=>{
    let uid = Math.floor(Math.random()*100);
    return{...obj,uid};
};
const docOne=addUID({name:"docile",age:20});
console.log(docOne);

interface UsersResponse<Data>{
    id:number,
    name:string,
    data:Data
}
const shppingList:UsersResponse<{productName:string,id:number}[]>={
    id:23,
    name:"shopping list",
    data:[
        {
            productName:"Dodd",
            id:12
        }
    ]
}
console.log(shppingList);
const user3:UsersResponse<{title:string,status:string}> ={
    id:12,
    name:"docile Imbereyemaso",
    data:{
        title:"docile",
        status:"single"
    }
}
console.log(user3);

//
class Counter {
  static count = 0;

  increment() {
    Counter.count++;
  }

  static getCount() {
    return this.count; 
  }
}

const counter = new Counter();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(Counter.getCount());

function identity<T>(value:T):T{
    return value;
}
const ident =identity("docile")
console.log(ident);

enum Color{redd="redd",green="green",red="red"};
const red:Color = Color.red;
console.log(red);

const names:any = "docile";
//first way of typecasting using <>;
const strLength = (<string>names).length;
console.log(strLength);
const str =  (names as string).toUpperCase();
console.log(str);
