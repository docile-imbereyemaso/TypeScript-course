const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
];
let cashInRegister = 100;
let nextOrderId = 1;
let orderQueue = [];
function addNewPizza(pizzaObj) {
    menu.push(pizzaObj);
}
function placeOrder(pizzaName) {
    let selectedPizza = menu.find(pizza => pizza.name === pizzaName);
    if (selectedPizza) {
        cashInRegister += selectedPizza.price;
        const newOrder = { id: nextOrderId++, pizza: selectedPizza, status: "Ordered" };
        orderQueue.push(newOrder);
        return newOrder;
    }
}
function completeOrder(orderId) {
    let order = orderQueue.find(pizza => pizza.id === orderId);
    if (order) {
        order.status = "completed";
    }
    return order;
}
addNewPizza({ name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ name: "BBQ Chicken", price: 12 });
addNewPizza({ name: "Spicy Sausage", price: 11 });
placeOrder("Chicken Bacon Ranch");
completeOrder(1);
let examples = ['docile', 23, 56, "sharp", true];
console.log(examples);
export {};
//# sourceMappingURL=index.js.map