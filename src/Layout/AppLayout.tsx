import { Map } from "@components/Map";
import { Sidebar } from "@components/Sidebar";
import { useInteration } from "@context/InterationContext";
import { Outlet } from "react-router";

export function AppLayout()
{
    const {sideOpen} = useInteration()

    return (

        <>
            <div className="bg-he-dark gap-1 flex">
                <Sidebar/>
               
                <div className="absolute md:relative z-2 bottom-0 w-full md:w-auto">
                    <Outlet/>
                </div>
            </div>

            <div 
                className={`${sideOpen ? 'md:w-[calc(100svw-13.5rem)]  transition-all duration-500' :'md:w-full transition-all duration-500'} right-0 top-0 absolute w-[100svw] h-[100svh] `}
            >
                <Map/>
           </div>
        </>
        
    )
}