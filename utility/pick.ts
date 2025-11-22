interface Product{
    id:number;
    name:string;
    price:number;
    description:string;
    category:string
}

type ProductReview =Pick<Product,"id"|"name"|"price">;

const productReview:ProductReview={
    id:12,
    name:"Mango juice",
    price:12000
}

function displayProductReview(product:ProductReview):string{
    return `${product.id} ${product.name} ${product.price}`
}

console.log(displayProductReview(productReview));