import { FaClock, FaMap, FaSmile, FaUser } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

type RequestRowProps = {
    id:string
    tags:any[]
    area:any
    scheduling:any[]
    guest:any
    status:any
}

export function RequestRow({}:Partial<RequestRowProps>) {
    // nome da area
    // nome da pessoa
    // data da solicitação
    // status da solicitação
    // periodo da solicitação

    return (
        <div className="w-full h-[85px] flex flex-row bg-gray-50 items-center md:items-start justify-between shadow rounded-[4px] p-[2px]">
            <span className="bg-he-green-50 rounded-tl-[3px] rounded-bl-[3px] h-full w-[3px]"></span>
            <div className="w-full h-full flex flex-col px-1 py-2">
                <header className="w-full h-[14px] text-he-gray-50 flex flex-row font-semibold items-center gap-4 text-[11px]">
                    <div className="flex flex-row gap-1 items-center">
                        <RiMoneyDollarCircleFill/>
                        Aluguel
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
                    
                    <div className="gap-1">
                        <div className="   flex relative h-full flex-row gap-1 items-center">
                            <FaClock/>
                            <span className="text-he-gray-800">14/07/2035 18:00</span>

                        </div>

                        

                        <div className="flex h-full flex-row gap-1 items-center">
                            <FaClock/>
                            <span className="text-he-gray-800">14/07/2035 18:00</span>
                        </div>
                    </div>
                </main>

                 <footer className="w-full  h-full text-he-gray-50 text-[9px] font-semibold flex flex-row items-center gap-2 justify-between">
                    <div className=" flex relative h-full flex-row gap-1 items-center">
                        <FaUser/>
                        <span className="text-he-gray-50">Gustavo</span>

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