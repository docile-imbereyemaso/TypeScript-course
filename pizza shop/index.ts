interface Pizza{
    name:string;
    price:number
}

interface Order{
    id:number;
    pizza:Pizza;
    status:string
}

const menu:Pizza[] = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
]
let cashInRegister:number= 100;
let nextOrderId =1;
let orderQueue:Order[] = []

function addNewPizza(pizzaObj:Pizza) {
    menu.push(pizzaObj)
}






 function placeOrder(pizzaName:string){
     let selectedPizza=menu.find(pizza=>pizza.name===pizzaName);
     if(selectedPizza){
          cashInRegister+=selectedPizza.price;
           const newOrder:{id:number,pizza:Pizza,status:string} = {id:nextOrderId++,pizza:selectedPizza,status:"Ordered"};
     
     orderQueue.push(newOrder);
     return newOrder;
     }
   
    
     
 }
 
 
 function completeOrder(orderId:number){
     let order = orderQueue.find(pizza=>pizza.id===orderId);
     if(order){
       order.status="completed";
     }
     
     return order;
 }
 
 
 addNewPizza({ name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({ name: "BBQ Chicken", price: 12 })
addNewPizza({ name: "Spicy Sausage", price: 11 })

placeOrder("Chicken Bacon Ranch")
completeOrder(1)

// console.log("Menu:", menu)
// console.log("Cash in register:", cashInRegister)
// console.log("Order queue:", orderQueue)

type elements = string|number|boolean;
let examples:elements[]=['docile',23,56,"sharp",true];
console.log(examples);
 