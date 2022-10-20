


 interface configration{
    id:number;
    plugin:string;
    configrationValues:configrationValues[];
}
interface configrationValues{
    id:number;
    name:string;
    value:string;
}



export type {configration,configrationValues}