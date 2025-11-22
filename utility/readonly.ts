interface MutablePoint{
    x:number;
    y:number;
}
// these properties in this object can't be assigned again.
const points:Readonly<MutablePoint>={x:23,y:45};
// the push and unshift doesn't exist on this array
const arr:Readonly<number[]>=[2,34,4,5,6,7];
