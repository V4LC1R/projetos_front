import { IoMenu } from "react-icons/io5";
import { useInteration } from "@context/InterationContext";
import { useEffect, useState } from "react";
export function HambugerSidebar(){
    const {handleSideOpen, sideOpen} = useInteration()
    
    const [showSidebar, setShowSidebar] = useState(sideOpen)

    useEffect(() => {
        setTimeout(() => {
            setShowSidebar(sideOpen)
        }, 200)
        
    }, [sideOpen])
    
    return(
       <>
           
        {
            !showSidebar && (
                <aside className="z-3 p-4 w-15 position absolute h-10 transition-transform duration-500">
                    <div 
                        onClick={handleSideOpen}
                        className="rounded-full cursor-pointer hover:bg-he-green-600 transition-all duration-300 bg-he-green-400 w-10 h-10 flex justify-center items-center">
                        <IoMenu className=" text-2xl  text-white" />
                    </div>
                </aside>
            )
        }
            
        
       </>
    )
}