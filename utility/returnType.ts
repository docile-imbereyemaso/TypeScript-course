type T7 = ReturnType<(a:number,b:string)=>void>;

const fetchUser =async (id:number):Promise<{id:number,name:string}> => ({id:34,name:"john"});

type fetchUserResult = ReturnType<typeof fetchUser>;