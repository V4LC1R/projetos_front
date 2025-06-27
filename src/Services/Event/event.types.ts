import { Area } from "@services/Area";
import { Schedule } from "@services/Schedule/schedule.types";

export enum EventTypeEnum{
    SIMPLE = 1,
    TOURNAMENT = 2,
    PARTY = 3
}

export type Event = {
    id:number;
    name:string
    areaId:number
    guestId:number
    area:Area
    type:EventTypeEnum
    schedule:Schedule[]
}

export interface EventFormRequest extends Pick<Event, "areaId" | "name" | "type"> {
    schedules:number[]
}