import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { AiFillMoneyCollect } from "react-icons/ai";
import { FaArrowLeft, FaClock, FaMap, FaSearch, FaUser } from "react-icons/fa";
import { FaMoneyBill, FaMoneyBillWheat } from "react-icons/fa6";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { twMerge } from "tailwind-merge";

type CardBodyProps = {
    children?: React.ReactNode;
    className?: string;
}

function ScrollableArea({children,className}: {children: React.ReactNode, className?: string}) {
    return (
        <div className={twMerge("overflow-y-auto rounded w-full flex flex-col custom-scrollbar",className)}>
            <div className="flex flex-col gap-5" >
            { children }
            </div>
        </div>
    )
}

function CardBody({children,className}: CardBodyProps) {
    return (
        <div 
            className={twMerge("bg-white md:rounded-[4px]  mt-1",className)}
        >
            {children}
        </div>
    )
}

function RequestRow() {
    // nome da area
    // nome da pessoa
    // data da solicitação
    // status da solicitação
    // periodo da solicitação

    return (
        <div className="w-full h-[85px] flex flex-row bg-gray-50 items-center justify-between shadow rounded-[4px] p-[2px]">
            <span className="bg-he-green-50 rounded-tl-[3px] rounded-bl-[3px] h-full w-[3px]"></span>
            <div className="w-full h-full flex flex-col px-1 py-2">
                <header className="w-full h-[14px] text-he-gray-50 flex flex-row font-semibold items-center justify-between text-[11px]">
                    <div className="flex flex-row gap-1 items-center">
                        <RiMoneyDollarCircleFill/>
                        Aluguel
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

export function NotificationPage() {
    return (
       <div className="w-full h-full flex items-center justify-center px-2">
            <CardBody
                className="p-2 gap-4 flex flex-col md:h-[600px] md:w-[400px] h-[600px] w-full self-center rounded-tl-[4px] rounded-tr-[4px]"
            >
                <header className="h-[30px] w-full flex items-center flex-row text-he-green-700 ">
                    <FaArrowLeft className="hover:text-he-green-900 w-[10%] transition-all duration-300 text-xl cursor-pointer" />  
                    <div className="w-[85%] flex flex-col items-center font-bold text-xl">
                        <span >Solicitações</span>       
                    </div>
                </header>

                <main className="w-full h-full flex px-1 flex-col items-center justify-start gap-4">

                    <div className="w-full flex gap-1 items-center justify-start ">
                        <InputText
                            className="w-full h-[40px] px-2 border-he-gray-600 border-1 rounded-md"
                            placeholder="Pesquisar por nome da área ou pessoa"
                        />
                        <Button className=" w-[50px] h-[40px] rounded-[4px] justify-center text-white items-center bg-he-green-700"><FaSearch/></Button>
                    </div>

                    <ScrollableArea className="md:h-[470px] h-[470px]">
                        <RequestRow />
                        <RequestRow />

                        <RequestRow />
                        <RequestRow />

                        <RequestRow />
                        <RequestRow />
                        <RequestRow />
                        <RequestRow />
                        <RequestRow />

                        <RequestRow />
                        <RequestRow />
                        <RequestRow />
                        <RequestRow />

                        <RequestRow />
                        <RequestRow />


                        <RequestRow />

                        <RequestRow />
                        <RequestRow />
                        <RequestRow />
                        <RequestRow />
                        <RequestRow />

                        <RequestRow />
                        <RequestRow />

                        <RequestRow />
                        <RequestRow />

                        <RequestRow />
                    </ScrollableArea>
                </main>
                
            </CardBody>
       </div>
    )
}