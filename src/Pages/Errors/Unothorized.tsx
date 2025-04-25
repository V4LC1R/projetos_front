import { IoArrowBackOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router";

export function NotFound(){

    const navigate = useNavigate();

    return(
        <div className=" z-10 bg-white p-10 rounded flex flex-col gap-1 mt-1 items-center justify-center ">
            <header className="w-full flex flex-col text-center text-he-green-300">
                <span className="text-[4.2rem] h-16 italic pr-65 align-bottom font-[200]">Hora</span>
                <strong className="text-8xl italic align-text-top font-bold">Extra</strong>
            </header>
            <main className=" gap-8 flex flex-col items-center justify-center">
               <div className="flex flex-col items-center justify-center gap-2">
                    <h1 className="text-4xl font-bold">Acesso negado!</h1>
                    <p className="text-gray-500">A página que está tentando acessar, exige autorização!</p>
               </div>
                <button onClick={() => navigate("/auth")} className=" hover:bg-he-green-600 transition-all duration-300 flex justify-between items-center gap-2 rounded-full bg-he-green-300 text-white px-1 py-2 cursor-pointer">
                    <IoArrowBackOutline className=" rounded-full bg-white w-7 h-7 flex items-center justify-center text-he-green-400 text-xl"/>
                    Ir para a página de Login!
                </button>
            </main>
        </div>
    )
}