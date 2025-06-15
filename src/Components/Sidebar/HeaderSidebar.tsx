import { useInteration } from "@context/InterationContext";
import { useUser } from "@context/UserContext";
import { FaArrowLeft } from "react-icons/fa6";

export function HeaderSidebar(){
    const {handleSideOpen} = useInteration() 
    const {user} = useUser()
    return(

        <header className="flex flex-col gap-4">
            <div className="grid grid-cols-4  justify-end text-he-green-700">
                <div className="w-full text-end pt-2 col-span-3">
                    <h1 className="italic pr-14 h-6 font-light align-baseline text-[28px]">Hora</h1>
                    <h1 className="italic text-xl align-text-top text-[30px] font-bold">Extra</h1>
                </div>
                <div className="flex flex-col h-full justify-start items-end pt-3 pr-2 ">
                    <FaArrowLeft className=" hover:text-he-green-900 transition-all duration-300 text-2xl cursor-pointer" onClick={handleSideOpen} />
                </div> 
            </div>

            <div className="grid grid-cols-[50px_1fr] w-full justify-center items-center">
                <div 
                    className="place-self-center h-10 w-10 rounded-full overflow-hidden border-[2px] border-he-green-500 flex flex-col justify-center items-center p-[1px]">
                    <img src="https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg" alt="user" className="rounded-full w-full h-full object-cover" />
                </div>
                <span className="place-self-left">{user.name}</span>
            </div>
        </header>
    )
}