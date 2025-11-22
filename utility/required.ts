interface Config {
    apiUrl?:string;
    timeout?:number;
    retries?:number
}

const fullConfig:Required<Config>={
    apiUrl:"https://api.example.com",
    timeout:34,
    retries:3
}