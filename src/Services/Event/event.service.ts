import api from "../api"
import { Event, EventFormRequest } from "./event.types"

const basePath = '/auth'

export default {
    async create(dataForm:EventFormRequest):Promise<Event>{
        const {data} : {data:Event} = await api.post(`${basePath}`,dataForm)
        return data
    },
}