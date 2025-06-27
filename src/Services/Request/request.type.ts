import { Area } from "@services/Area";
import { Schedule } from "@services/Schedule/schedule.types";
import { Guest, User } from "@services/User";

export enum StatusRequestEnum {
    AWAIT= 0,
    ACEPT= 1,
    REJECT=2,
    CANCELED=3
}

export type Request = {
    id:number;
    message:string
    area:Area
    owner:Guest
    schedule:Schedule[]
    status:StatusRequestEnum
    nameEvent:string
}

export type RequestForm = {
    message:string
    nameEvent:string,
    areaId:number,
	schedules:number[]
}