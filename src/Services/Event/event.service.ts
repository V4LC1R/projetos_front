
import api from "@services/Shared/api"
import { Event, EventFormRequest } from "./event.types"

const basePath = '/event'

export default {
    async create(dataForm:EventFormRequest):Promise<Event>{
        const {data} : {data:Event} = await api.post(`${basePath}`,dataForm)
        return data
    },
    async byArea(id:number):Promise<Event[]>{
        const {data}:{data:Event[]} = await api.get(`${basePath}/area-events/${id}`);
        return data
    },

    async byGuest():Promise<Event[]>{
        const {data}:{data:Event[]} = await api.get(`${basePath}/my-events`);
        return data
    },
    async delete(eventId:number):Promise<void>{
        return await api.delete(`${basePath}/${eventId}`)
    },
}