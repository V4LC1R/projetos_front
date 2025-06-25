import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { AxiosError } from "axios"
import { getSession, login, logout } from "@services/LocalStorage/auth"
import { AuthResponse, SignInFormRequest, User, UserFormRequest } from "@services/User"
import userService from "@services/User/user.service"


interface UserProviderProps {
    children:ReactNode
}

type UserContextProps = {
    user:User
    isAuth:boolean
    SignIn(userCredential:SignInFormRequest):Promise<void>
    SignUp(userCredential:UserFormRequest):Promise<void>
}

export const UserContext = createContext({} as UserContextProps)

export function UserProvider({children} : UserProviderProps){

    const [user,setUser] = useState<User>({} as User);
    const [isAuth,setIsAuth] = useState(false)

    async function SignIn(userCredential:SignInFormRequest){
        try {
            const auth = await userService.signIn(userCredential)

            setUser(()=>auth.user)
            setIsAuth(()=>true)
            login(auth)

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
       const session = getSession()

        if(!session)
            return setIsAuth(false)

       setUser(()=>session.user)
    },[])

    return(
        <UserContext.Provider
            value={
                {
                    //state
                    user,
                    isAuth,
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