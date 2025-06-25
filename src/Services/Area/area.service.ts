import api from '@services/Shared/api';
import { Area, AreaByPosition, Category } from './../Area/area.types';
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
    async byPosition(dataSearch:AreaSearchByPosition):Promise<AreaByPosition[]>{
        const params = new URLSearchParams()
        params.set('distance',String(dataSearch.distance))
        params.set('categoryId',JSON.stringify(dataSearch.categories))
        params.set('lat',dataSearch.lat)
        params.set('lng',dataSearch.lng)
        const {data}:{data:AreaByPosition[]} = await api.get(`${basePath}/by-position?${params.toString()}`)
        return data
    },
    async categories():Promise<Category[]>{
        const {data}:{data:Category[]} = await api.get(`${basePath}/categories`)
        return data
    }
}