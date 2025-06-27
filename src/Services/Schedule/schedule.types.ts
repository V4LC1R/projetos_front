import { AvailabilityStatus } from "@services/Shared/shared.types";

export type Schedule = {
    start_time: string | Date;
    end_time: string | Date;
    status:AvailabilityStatus
    date:string | Date
    id:number;
    areaId:number
    eventId:number
}

export type ScheduleFormRequest = Omit<Schedule, "id" | "areaId" | "eventId" | "status"> ;