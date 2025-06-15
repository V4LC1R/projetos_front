import { AvailabilityStatus } from "@services/Shared/shared.types";

export type Schedule = {
    start_time: Date;
    end_time: Date;
    status:AvailabilityStatus
    date:Date
    id:number;
    areaId:number
    eventId:number
}