export enum EventTypeEnum{
    SIMPLE = 1,
    TOURNAMENT = 2,
    PARTY = 3
}

export type Event = {
    id?:number;
    areaId:number
    name:string
    type:EventTypeEnum
}

export interface EventFormRequest extends Pick<Event, "areaId" | "name" > {
    password:string
}