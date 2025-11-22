type T1 = Awaited<Promise<string>>;//string

type T2 = Awaited<Promise<Promise<number>>>;//number


async function  fetchData():Promise<{data:string}>{
    return {data:'some data'}
}

type FetchedData = Awaited<ReturnType<typeof fetchData>>;
