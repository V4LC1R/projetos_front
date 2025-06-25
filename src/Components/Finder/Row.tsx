import { AreaByPosition } from "@services/Area";
import { NumberHelper } from "@services/Format/Number";
import { FaClock, FaMap, FaMapMarkerAlt, FaSmile, FaUser } from "react-icons/fa";
import { IoFootball } from "react-icons/io5";
import { useNavigate } from "react-router";


type RowProps = {
    area:AreaByPosition
}

export function Row({area}:Partial<RowProps>) {

    const navi = useNavigate()

    const splitNumber = NumberHelper.numberMoneySplit(area?.areas_rent ?? 0.0)

    function handleShowArea(){
        navi(`/app/area/${area?.areas_id}`)
    }   

    return (
        <div onClick={()=>handleShowArea()} className=" cursor-pointer w-full h-[85px] flex flex-row border-he-green-100 border-[1px] bg-gray-50 items-center md:items-start justify-between shadow rounded-[4px]">
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
                        <span className="text-he-gray-800">{area?.areas_name}</span>
                    </div>
                    
                    
                    <div className="flex relative h-full text-[20px] flex-row gap-1 justify-center items-center">
                        
                        <div className="text-he-gray-800 text-[15px] flex flex-col justify-end items-end">
                            <div>
                                <span className="font-bold leading-[24px] text-[22px]">{splitNumber[0]}</span>,{splitNumber[1] ?? "00"}
                            </div>
                            
                        </div>
                        <span  className="text-he-gray-800 w-full text-[16px]">R$/Hr</span>
                    </div>

                    
                </main>

                 <footer className="w-full  h-full text-he-gray-50 text-[9px] font-semibold flex flex-row items-center gap-2 justify-between">
                    <div className=" flex relative h-full flex-row gap-1 items-center">
                        <FaUser/>
                        <span className="text-he-gray-100 text-[12px]">Dono: {area?.ownername}</span>
                    </div>

                    <div className="flex flex-row gap-1">
                        <div className=" flex relative h-full flex-row gap-1 items-center">
                            <FaClock className="text-he-green-400"/>
                            <span className="text-he-gray-100 text-[12px]">{area?.availableSchedules} Horaios</span>
                        </div>

                        <div className=" flex relative h-full flex-row gap-1 items-center">
                            <FaMapMarkerAlt className="text-he-green-400"/>
                            <span className="text-he-gray-100 text-[12px]">Distancia: {NumberHelper.truncate(area?.distance ?? 0.0,1)}km</span>
                        </div>
                    </div>

                </footer>
            </div>
        </div>
    )
}