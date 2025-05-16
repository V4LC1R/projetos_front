import api from "../api"
import { AuthResponse, SignInFormRequest, User, UserFormRequest } from "./user.types"

const basePath = '/auth'
const authBasePath =  `${import.meta.env.VITE_API_URL}/auth`

export default {
    async signIn(dataForm:SignInFormRequest):Promise< AuthResponse>{
        const {data} : {data:AuthResponse} = await api.post(`${authBasePath}`,dataForm)
        return data
    },
    async signUp(dataForm:UserFormRequest):Promise<User>{
        const {data} : {data:User }= await api.post(`${authBasePath}/register`,dataForm)
        return data
    },
    async changePassword(newPassword:string):Promise<User>{
        const {data} : {data:User} = await api.put(`${basePath}/change-password`,{password:newPassword})
        return data
    }
}