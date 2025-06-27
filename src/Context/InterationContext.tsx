import { getSidebar, setSidebar } from "@services/LocalStorage/sidebar"
import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import toast from "react-hot-toast"

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
    markInMap:boolean,
    getMarkeFromMap:(position: {lat: number, lng: number}) => void
    markInMapOn:() => void
    markInMapOff:() => void
    locationMarked:GeolocationProps
}

export const InterationContext = createContext({} as InterationContextProps)

export function InterationProvider({children} : InterationProviderProps){
    const status = getSidebar() 
    const [sideOpen, setSideOpen] = useState(status === "open")
    const [location, setLocation] = useState<GeolocationProps>({ latitude: null, longitude: null });
    const [locationMarked, setLocationMarked] = useState<GeolocationProps>({ latitude: null, longitude: null });

    const [markInMap, setMarkInMap] = useState<boolean>(false);
    const [error, setError] = useState(null);

    function handleSideOpen(){
        setSideOpen(!sideOpen)
    }

    function markInMapOn(){
        setMarkInMap(true)
        if(location.latitude && location.longitude){
            setLocationMarked({
                latitude: location.latitude,
                longitude: location.longitude
            })
        }else{
            toast.error("Não foi possível obter sua localização. Por favor, ative o GPS do seu dispositivo.")
        }
    }

    function getMarkeFromMap(position: {lat: number, lng: number}){
        if(position.lat && position.lng){
            setLocationMarked({
                latitude: position.lat,
                longitude: position.lng
            })
        }else{
            toast.error("Não foi possível obter a localização marcada. Por favor, tente novamente.")
        }

    }

    function markInMapOff(){
        setMarkInMap(false)
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
                //props
                sideOpen,
                location,
                markInMap,
                locationMarked,
                //methods
                handleSideOpen,
                markInMapOn,
                markInMapOff,
                getMarkeFromMap
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