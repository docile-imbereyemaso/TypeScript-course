interface Product{
    id:number;
    name:string;
    price:number;
    description:string;
    category:string
}


type ProductWithoutId =Omit<Product,"id">;

const product:ProductWithoutId={
    name:"i phone 14",
    price:23000,
    description:"The cat b",
    category:"chinese product"
}

const simplifiedProduct:Omit<Product,"description"|"category">={
    id:12,
    name:"mango phone",
    price:34000
}