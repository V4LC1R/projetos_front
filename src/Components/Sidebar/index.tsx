import { IoExit } from "react-icons/io5";
import { useInteration } from "@context/InterationContext";
import { HambugerSidebar } from "./HambugerSidebar";
import { ListSidebar } from "./ListSidebar";
import { HeaderSidebar } from "./HeaderSidebar";
import { logout } from "@services/LocalStorage/auth";
import { useEffect, useState } from "react";

export function Sidebar(){
    const {sideOpen} = useInteration()

    const handleLogout = () => {
        logout()
    }

    const [showSidebar, setShowSidebar] = useState(sideOpen)

    useEffect(() => {
        setTimeout(() => {
            setShowSidebar(sideOpen)
        }, 200)
    }, [sideOpen])
    
    return(
        <>
        
            <HambugerSidebar/>
            
            <aside
                className={`z-3 px-1 pb-1 flex flex-col gap-8 h-[100svh] w-[15.5rem] md:w-[13.5rem] bg-white justify-between border-r-[2px] border-he-green-500 transition-transform duration-200 ${sideOpen ? 'translate-x-[0rem]' : 'translate-x-[-18.5rem]'}`}
            >
                <HeaderSidebar/>

                <ListSidebar/>

                <footer className="flex w-full text-he-green-800 ">
                    <div onClick={handleLogout} className="flex gap-2 cursor-pointer justify-start items-center transition-all duration-300 hover:text-he-green-400 text-he-green-800">
                        <IoExit className="text-3xl" />
                        <p className="text-sm font-bold">Sair</p>
                    </div>
                </footer>
            </aside>
                
           
        </>
    )
}