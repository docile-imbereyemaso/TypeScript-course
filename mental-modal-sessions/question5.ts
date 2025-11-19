function getFirstElement<T>(arr:T[]):T|undefined{
 return arr[0]; 
}


console.log(getFirstElement([undefined]));
console.log(getFirstElement([1, 2, 3]));
console.log(getFirstElement(["a", "b", "c"]));
console.log(getFirstElement([]))