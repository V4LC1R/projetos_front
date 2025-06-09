import { FaClock, FaMap, FaSmile, FaUser } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

type RowProps = {
    id:string
    tags:any[]
    area:any
    scheduling:any[]
    guest:any
    status:any
}

export function Row({}:Partial<RowProps>) {
    // nome da area
    // nome da pessoa
    // data da solicitação
    // status da solicitação
    // periodo da solicitação

    return (
        <div className="w-full h-[85px] flex flex-row border-l-5 border-he-green-50 bg-gray-50 items-center md:items-start justify-between shadow rounded-[4px] p-[2px]">
            
            <div className="w-full justify-start h-full flex flex-col px-1 py-2">
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
                        <span className="text-he-gray-800 text-[18px]">Santa Colheita</span>
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
                        <span className="text-he-gray-50">Criado em : </span>

                        <span className="text-he-gray-50">14/07/2035 18:00</span>
                    </div>

                    <div className="flex flex-row gap-[4px]">
                        <div className="flex flex-row gap-1 items-center">
                            <span className="w-[6px] h-[6px] rounded-full bg-green-400"></span>
                            <span className="text-he-gray-900">Em Uso</span>
                        </div>

                        <div className="flex flex-row gap-1 items-center">
                            <span className="w-[6px] h-[6px] rounded-full bg-green-400"></span>
                            <span className="text-he-gray-900">Ativo</span>
                        </div>
                    </div>
                
                </footer>
            </div>
        </div>
    )
}