import { FaClock, FaHandPointDown, FaMap, FaMapMarked, FaMapMarkerAlt, FaMapPin, FaSmile, FaUser } from "react-icons/fa";
import { FaMoneyBill1 } from "react-icons/fa6";
import { IoFootball } from "react-icons/io5";
import { PiCurrencyDollarSimpleFill } from "react-icons/pi";
import { useNavigate } from "react-router";


type RowProps = {
    id:string
    tags:any[]
    area:any
    scheduling:any[]
    guest:any
    status:any
}

export function Row({}:Partial<RowProps>) {

    const navi = useNavigate()
    // nome da area
    // nome da pessoa
    // data da solicitação
    // status da solicitação
    // periodo da solicitação

    function handleShowArea(id:number){
        navi(`/app/area/${id}`)
    }   

    return (
        <div onClick={()=>handleShowArea(1)} className=" cursor-pointer w-full h-[85px] flex flex-row border-he-green-100 border-[1px] bg-gray-50 items-center md:items-start justify-between shadow rounded-[4px]">
            <span className="bg-he-green-50 rounded-tl-[3px] rounded-bl-[3px] h-full w-[5px]"></span>
            <div className="w-full h-full flex flex-col px-1 py-2">
                <header className="w-full h-[14px] text-he-gray-50 flex flex-row font-semibold items-center gap-4 text-[11px]">
                    <div className="flex flex-row gap-1 items-center">
                        <IoFootball/>
                        Futbol
                    </div>

                   <div className="flex flex-row gap-1 items-center">
                        <FaSmile/>
                        Lazer
                    </div>

                </header>

                <main className="w-full mt-1 h-full text-he-gray-600 text-[11px] font-semibold flex flex-row items-center gap-2 justify-between">
                    <div className=" text-[13px]  flex relative h-full flex-row gap-1 items-center">
                        <FaMap/>
                        <span className="text-he-gray-800">Santa Colheita</span>
                    </div>
                    
                    
                    <div className="flex relative h-full text-[20px] flex-row gap-1 justify-center items-center">
                        
                        <div className="text-he-gray-800 text-[15px] flex flex-col justify-end items-end">
                            <div>
                                <span className="font-bold leading-[24px] text-[22px]">25</span>,00
                            </div>
                            
                        </div>
                        <span  className="text-he-gray-800 w-full text-[16px]">R$/Hr</span>
                    </div>

                    
                </main>

                 <footer className="w-full  h-full text-he-gray-50 text-[9px] font-semibold flex flex-row items-center gap-2 justify-between">
                    <div className=" flex relative h-full flex-row gap-1 items-center">
                        <FaUser/>
                        <span className="text-he-gray-100 text-[12px]">Fale com: Gustavo</span>
                    </div>

                    <div className="flex flex-row gap-1">
                        <div className=" flex relative h-full flex-row gap-1 items-center">
                            <FaClock className="text-he-green-400"/>
                            <span className="text-he-gray-100 text-[12px]">5 Horaios</span>
                        </div>

                        <div className=" flex relative h-full flex-row gap-1 items-center">
                            <FaMapMarkerAlt className="text-he-green-400"/>
                            <span className="text-he-gray-100 text-[12px]">Distancia: 15km</span>
                        </div>
                    </div>

                </footer>
            </div>
        </div>
    )
}