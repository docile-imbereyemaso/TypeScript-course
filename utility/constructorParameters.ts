class Car{
    constructor(public make:string,public model:string,public year:Date){}
}

type CarParams = ConstructorParameters<typeof Car>