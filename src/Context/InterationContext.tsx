import { getSidebar, setSidebar } from "@services/LocalStorage/sidebar"
import { createContext, ReactNode, useContext, useEffect, useState } from "react"

interface InterationProviderProps {
    children:ReactNode
}

type InterationContextProps = {
    sideOpen:boolean
    handleSideOpen:() => void
}

export const InterationContext = createContext({} as InterationContextProps)

export function InterationProvider({children} : InterationProviderProps){
    const status = getSidebar() 
    const [sideOpen, setSideOpen] = useState(status === "open")

    function handleSideOpen(){
        setSideOpen(!sideOpen)
    }

    useEffect(() => {
        setSidebar(sideOpen ? "open" : "close")
    }, [sideOpen])

    return(
        <InterationContext.Provider value={{sideOpen, handleSideOpen}}>
            {children}
        </InterationContext.Provider>
    )
}

export const useInteration = ():InterationContextProps => {
    const context = useContext(InterationContext)

    return context
}