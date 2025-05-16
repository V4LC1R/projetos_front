import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { AxiosError } from "axios"
import { getSession, login } from "@services/LocalStorage/auth"
import { AuthResponse, SignInFormRequest, UserFormRequest } from "@services/User"
import userService from "@services/User/user.service"

interface UserProviderProps {
    children:ReactNode
}

type UserContextProps = {
    user:AuthResponse
    SignIn(userCredential:SignInFormRequest):Promise<void>
    SignUp(userCredential:UserFormRequest):Promise<void>
}

export const UserContext = createContext({} as UserContextProps)

export function UserProvider({children} : UserProviderProps){

    const [user,setUser] = useState<AuthResponse>({} as AuthResponse);

    async function SignIn(userCredential:SignInFormRequest){
        try {
            const user = await userService.signIn(userCredential)

            setUser(()=>user)
            login(user)

        } catch (error:AxiosError | any) {
            console.log(error)

            if(error instanceof AxiosError)
                throw new Error(error.response?.data)
        }
    }

    async function SignUp(userCredential:UserFormRequest){
        try {
            await userService.signUp(userCredential)

            await SignIn(userCredential)
        } catch (error) {
             console.log(error)

            if(error instanceof AxiosError)
                throw new Error(error.response?.data)
        }
    }

    useEffect(()=>{
       const user = getSession()
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