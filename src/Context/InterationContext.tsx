import { getSidebar, setSidebar } from "@services/LocalStorage/sidebar"
import { createContext, ReactNode, useContext, useEffect, useState } from "react"

interface InterationProviderProps {
    children:ReactNode
}

export type GeolocationProps = { 
    latitude: number | null, 
    longitude: number | null 
}

type InterationContextProps = {
    sideOpen:boolean
    location:GeolocationProps
    handleSideOpen:() => void

}

export const InterationContext = createContext({} as InterationContextProps)

export function InterationProvider({children} : InterationProviderProps){
    const status = getSidebar() 
    const [sideOpen, setSideOpen] = useState(status === "open")
    const [location, setLocation] = useState<GeolocationProps>({ latitude: null, longitude: null });
    const [error, setError] = useState(null);

    function handleSideOpen(){
        setSideOpen(!sideOpen)
    }

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                setLocation(()=>({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                }));
                },
                (err) => {
                   console.log(err)
                }
            );
        } else {
            console.log("deu pau")
        }
    }, []);

    useEffect(() => {
        setSidebar(sideOpen ? "open" : "close")
    }, [sideOpen])

    return(
        <InterationContext.Provider 
            value={{
                sideOpen,
                handleSideOpen,
                location
            }}
        >
            {children}
        </InterationContext.Provider>
    )
}

export const useInteration = ():InterationContextProps => {
    const context = useContext(InterationContext)

    return context
}