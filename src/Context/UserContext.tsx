import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { AuthData, SignInData, SignUpData, User,  } from "../@types/App"
import axios, { AxiosError } from "axios"
import { getSession, login } from "@services/LocalStorage/auth"

interface UserProviderProps {
    children:ReactNode
}

type UserContextProps = {
    user:User
    SignIn(userCredential:SignInData):Promise<void>
    SignUp(userCredential:SignUpData):Promise<void>
}

export const UserContext = createContext({} as UserContextProps)

export function UserProvider({children} : UserProviderProps){

    const [user,setUser] = useState<User>({} as User);

    async function SignIn(userCredential:SignInData){
        try {
            const {data} : {data:AuthData} = await axios.post(
                `${import.meta.env.VITE_API_URL}/auth`,
                userCredential
            )

            const {user,} = data

            setUser(()=>user)
            login(data)
            
            window.location.href = user.type == 1 
                ? '/dashboard' 
                : '/dashboard/admin'


        } catch (error:AxiosError | any) {
            console.log(error)

            if(error instanceof AxiosError)
                throw new Error(error.response?.data)
        }
    }

    async function SignUp(userCredential:SignUpData){
        try {
            await axios.post(
                `${import.meta.env.VITE_API_URL}/user/register`,
                userCredential
            )

            await SignIn(userCredential)
        } catch (error) {
             console.log(error)

            if(error instanceof AxiosError)
                throw new Error(error.response?.data)
        }
    }

    useEffect(()=>{
       const {user} = getSession()
       setUser(()=>user)
    },[])

    return(
        <UserContext.Provider
            value={
                {
                    //state
                    user,
                    //methods
                    SignIn,
                    SignUp
                }
            }
        >
            {children}
        </UserContext.Provider>
    )
}

export const useUser = ():UserContextProps =>{

    const context = useContext(UserContext)

    return context
} 