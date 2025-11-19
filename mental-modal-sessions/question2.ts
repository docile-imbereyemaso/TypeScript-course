function describeInput(input:number|string): string{
    
    if(typeof input ==="string"){
        return`You have provided string: ${input}`;
    }

    return `You have provided number: ${input}`;
    
  
}
console.log(describeInput(34))
