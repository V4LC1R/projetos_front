import { IoExit } from "react-icons/io5";
import { logout } from "@services/localStorage";

export function TopHeader(){
    return (
        <header className="  h-[3rem] p-1 font-bold bg-green-500 text-[16px] md:shadow w-full items-center flex flex-row gap-8 text-center justify-center ">
            <div onClick={()=>logout()} className="text-white cursor-pointer pl-0.5 w-9 md:w-auto flex gap-0.5" >
                <IoExit className="" size={25}/>
                <span className="hidden md:block">
                    Sair
                </span>
            </div>
            <div className="w-full text-center text-white pr-8">
                <div className="text-3xl flex gap-0.5 w-full align-center justify-center">
                  <span className="font-light"> Hora <strong className="font-semibold"> Extra</strong></span>
                </div>
            </div>
            
        </header>
    )
}