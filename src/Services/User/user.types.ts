import { Area } from "@services/Area"
import { Event } from "@services/Event"

export type User = {
    id: number,
    email: string,
    name: string,
    cellphone: string
}

export interface AuthResponse {
    token: string;
    user:User
}

export interface Owner extends User{
    areas:Area[]
}

export interface Guest extends User{
   guestId:number
}

export interface Organizer extends User{
    event:Event
}

export interface UserFormRequest extends Omit<User, "id" > {
    password:string
}

export interface SignInFormRequest extends Pick<UserFormRequest, "password" | "email">{}