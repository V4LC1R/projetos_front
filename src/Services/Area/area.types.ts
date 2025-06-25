import { Schedule } from "@services/Schedule/schedule.types"

export type AreaByPosition = {
    areas_id: number;
    areas_rent: number;
    areas_name: string;
    ownername: string;
    address_district: string;
    address_number_place: string;
    address_city: string;
    latitude: number;
    longitude: number;
    distance: number; // Distância calculada
    availableSchedules: number; // Contagem de horários disponíveis
};

export type Category ={
    id:number
    name:string
}

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
    name: string;
    rent: number;
    createdAt: Date;
    updatedAt: Date;
    ownerId:number
    address:Address
    schedule:Schedule[]
    categories:Category[]
}

export type AreaSearchByPosition = {
    lat:string,
    lng:string,
    distance:number,
    categories:number[]
}

export interface AreaFormRequest extends Omit<Area, "id" | "createdAt" | "updatedAt" | "ownerId" | "address"> {
    address: Omit<Address, "id" | "areaId">;
}
