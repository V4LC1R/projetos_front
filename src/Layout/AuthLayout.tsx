import LoginImage from "@assets/loginImage.png"
import { Outlet } from "react-router";

export function AuthLayout(){

    return(
        <div className=" h-[100svh] w-[100svw] grid md:grid-cols-5">
            <div className="hidden md:flex md:col-span-3 h-full w-full flex-col text-center items-center justify-center">
                <img className=" w-[650px] h-[600px]" src={LoginImage} alt="" />
            </div>

            <div className="col-span-2 flex flex-row h-full w-full px-6 text-left justify-center">

                <div className="h-[95%] max-h-[900px] justify-center w-full max-w-[500px] self-center shadow-xl bg-he-green-300 rounded-xl p-8 flex flex-col gap-6">
                    <form className="flex flex-col gap-6 ">
                        <header className="w-full flex flex-col text-center text-white">
                            <span className="text-[3.2rem] h-13 italic pr-45 align-bottom font-[200]">Hora</span>
                            <strong className="text-6xl italic align-text-top font-bold">Extra</strong>
                        </header>
                        
                        <Outlet/>
                        
                    </form>                    
                </div>
               
            </div>
        </div>
    )
}