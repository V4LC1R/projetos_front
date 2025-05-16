import { Event } from "@services/Event"

export type Address = {
    id:number
    areaId:number
    number_place: string,
    country: string,
    district:string,
    street: string,
    city: string,
    state:string,
    complement: string,
    latitude: string,
    longitude: string
}

export type Area = {
    id:number
    ownerId:number
    name:string
    rent:number
    createdAt:Date
    updatedAt:Date
    address:Address
    event?:Event[]
}

export type AreaSearchByPosition = {
    lat:string,
    lng:string,
    distance:number
}

export interface AreaFormRequest extends Omit<Area, "id" | "createdAt" | "updatedAt" | "ownerId" | "address"> {
    address: Omit<Address, "id" | "areaId">;
}