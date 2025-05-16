import { Area } from "@services/Area"
import { Event } from "@services/Event"

export type User = {
    id: number,
    email: string,
    name: string,
    cellphone: string
}

export interface AuthResponse extends Pick<User, "email" | "name"> {
    token: string;
}

export interface Owner extends User{
    areas:Area[]
}

export interface Organizer extends User{
    event:Event
}

export interface UserFormRequest extends Omit<User, "id" > {
    password:string
}

export interface SignInFormRequest extends Pick<UserFormRequest, "password" | "email">{}