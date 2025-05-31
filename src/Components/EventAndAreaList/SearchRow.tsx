import { FaEllipsisV } from "react-icons/fa"
import { useNavigate } from "react-router";

interface SearchRowProps {
    
}

export function SearchRow({}:SearchRowProps){

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/app/area/1");
    }

    return (
        
        <div onClick={handleClick} className=" w-full h-[80px] grid grid-cols-[18px_3fr_2fr] border-1 border-he-green-300 rounded-md bg-white overflow-hidden">
            <div className="bg-he-green-300"/>
                <div className="w-full h-[70px] flex flex-col text-[18px] justify-center items-start gap-1.5 px-2">
                <h3 className="font-bold">Escola avani</h3>
                <span className="font-light text-[12px]">5 horarios para semana</span>
            </div>

            <div className="flex flex-col justify-start items-end p-2 gap-1">
                <span className="font-light text-[12px]">Distantcia 8km</span>
                    <div className="flex flex-row gap-1 items-center">
                    <h3 className="font-bold">150,00 <span className="font-semibold text-[12px] text-black">R$/Hr</span></h3>
                    <FaEllipsisV className="text-he-green-300" />
                </div>
            </div>
        </div>
        
    )
}