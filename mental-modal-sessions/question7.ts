type  ApplyOperation =(a:number,b:number)=>number


function applyOperation(a:number, b:number, operation:ApplyOperation):number {
  return operation(a, b);
}
const add = (x:number, y:number) => x + y;
const multiply = (x:number, y:number) => x * y;

console.log(applyOperation(10, 5, add));
console.log(applyOperation(10, 5, multiply));