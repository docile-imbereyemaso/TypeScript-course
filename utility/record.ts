type pageUrls = Record<string,string>;

const urls:pageUrls ={
    home:"/url",
    about:"/about",
    service:"/service",
    
}

type UserRole ="admin"|"user"|"guest";
type Permission = Record<UserRole,string[]>;

const appPermission:Permission={
    admin:["read","write","delete"],
    user:["read","write"],
    guest:["read"]
}