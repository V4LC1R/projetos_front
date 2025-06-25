
import api from "@services/Shared/api"
import { Request, RequestForm } from "./request.type"

const basePath = '/request'

export default {
    async create(dataForm:RequestForm):Promise<Request>{
        const {data} : {data:Request} = await api.post(`${basePath}`,dataForm)
        return data
    },
    async byArea(id:number):Promise<Request[]>{
        const {data}:{data:Request[]} = await api.get(`${basePath}/area-request/${id}`);
        return data
    },

    async byGuest():Promise<Request[]>{
        const {data}:{data:Request[]} = await api.get(`${basePath}/my-requests`);
        return data
    },
    async toOwner():Promise<Request[]>{
        const {data}:{data:Request[]} = await api.get(`${basePath}/to-owner`);
        return data
    },
    async ownerReject(requestId:number):Promise<void>{
        await api.put(`${basePath}/owner-reject/${requestId}`)
    },
    async ownerAcept(requestId:number):Promise<void>{
        await api.put(`${basePath}/owner-acept/${requestId}`)
    },
    async delete(requestId:number):Promise<void>{
        return await api.delete(`${basePath}/${requestId}`)
    },
}