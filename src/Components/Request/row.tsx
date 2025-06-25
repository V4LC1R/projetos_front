import { CategoryIcon } from "@components/CategoryIcon";
import { timestamps } from "@services/Format/Date";
import { Request } from "@services/Request/request.type";
import { FaClock, FaMap, FaUser } from "react-icons/fa";

type RequestRowProps = {
   req:Request
}

export function RequestRow({req}:RequestRowProps) {

    function getEndRequestTime(){
        const qtdTimes = req.schedule.length
        const endReq =  req.schedule[qtdTimes-1].end_time
        return timestamps(endReq)
    }

    return (
        <div className="w-full h-[85px] flex flex-row bg-gray-50 items-center md:items-start justify-between shadow rounded-[4px] p-[2px]">
            <span className="bg-he-green-50 rounded-tl-[3px] rounded-bl-[3px] h-full w-[3px]"></span>
            <div className="w-full h-full flex flex-col px-1 py-2">
                <header className="w-full h-[14px] text-he-gray-50 flex flex-row font-semibold items-center gap-4 text-[11px]">
                    {
                        req.area.categories.map(c=><CategoryIcon name={c.name}/>)
                    }

                </header>

                <main className="w-full mt-1 h-full text-he-gray-600 text-[11px] font-semibold flex flex-row items-center gap-2 justify-between">
                    <div className=" text-[13px]  flex relative h-full flex-row gap-1 items-center">
                        <FaMap/>
                        <span className="text-he-gray-800">{req.area.name}</span>
                    </div>
                    
                    <div className="gap-1">

                        
                        <div className="   flex relative h-full flex-row gap-1 items-center">
                            <FaClock/>
                            <span className="text-he-gray-800">{timestamps(req.schedule[0].start_time)}</span>
                        </div>

                        <div className="   flex relative h-full flex-row gap-1 items-center">
                            <FaClock/>
                            <span className="text-he-gray-800">{getEndRequestTime()}</span>
                        </div>
                        
                    </div>
                </main>

                 <footer className="w-full  h-full text-he-gray-50 text-[9px] font-semibold flex flex-row items-center gap-2 justify-between">
                    <div className=" flex relative h-full flex-row gap-1 items-center">
                        <FaUser/>
                        <span className="text-he-gray-50">{req.owner.name}</span>

                        <span>as</span>

                        <span className="text-he-gray-50">14/07/2035 18:00</span>
                    </div>

                    <div className="flex flex-row gap-1 items-center">
                        <span className="w-[6px] h-[6px] rounded-full bg-amber-400"></span>
                        <span className="">Pendente</span>
                    </div>
                
                </footer>
            </div>
        </div>
    )
}