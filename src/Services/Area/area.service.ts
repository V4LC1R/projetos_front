import { Area } from './../Area/area.types';
import api from "../api"
import { AreaFormRequest, AreaSearchByPosition } from "./area.types"

const basePath = '/area'

export default {
    async create(dataForm:AreaFormRequest):Promise<Area>{
        const {data}:{data:Area} = await api.post(basePath,dataForm)
        return data
    },
    async show(areaId:number):Promise<Area>{
        const {data}:{data:Area} = await api.get(`${basePath}/${areaId}`)
        return data
    },
    async update(areaId:number,dataForm:AreaFormRequest):Promise<Area>{
        const {data}:{data:Area} = await api.put(`${basePath}/${areaId}`,dataForm)
        return data
    },
    async delete(areaId:number):Promise<void>{
        return await api.delete(`${basePath}/${areaId}`)
    },
    async myAreas():Promise<Area[]>{
        const {data}:{data:Area[]} = await api.get(`${basePath}/my-areas`)
        return data
    },
    async byPosition(dataSearch:AreaSearchByPosition):Promise<Area[]>{
        const {data}:{data:Area[]} = await api.get(`${basePath}/by-position`,{params:dataSearch})
        return data
    }
}