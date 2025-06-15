import { Map } from "@components/Map";
import { Sidebar } from "@components/Sidebar";
import { useInteration } from "@context/InterationContext";
import {  isAuthenticated, logout } from "@services/LocalStorage/auth";
import { useEffect } from "react";
import { Outlet } from "react-router";

export function AppLayout()
{
    const {sideOpen} = useInteration()

    useEffect(()=>{

        if(isAuthenticated())
            return 
    
        logout()
    },[])

    return (

        <>
            <div className="bg-he-dark gap-1 flex">
                <Sidebar/>
               
                <div className={`${!sideOpen ? ' md:translate-x-[-8.5rem]':''} overflow-clip transition-transform duration-200 absolute md:relative z-2 bottom-0 w-full md:w-auto`}>
                    <Outlet/>
                </div>
            </div>

            <div 
                className={`${sideOpen ? 'md:w-[calc(100svw-13.5rem)]' :'md:w-full '}  transition-all duration-200 right-0 top-0 absolute w-[100svw] h-[100svh] `}
            >
                <Map/>
           </div>
        </>
        
    )
}