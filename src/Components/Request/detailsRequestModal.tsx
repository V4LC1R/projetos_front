import { Form } from "@components/__common/Form";
import { Page } from "@components/__common/Page";
import { onlYDate, times } from "@services/Format/Date";
import { Request, StatusRequestEnum } from "@services/Request/request.type";
import { twMerge } from "tailwind-merge";

export type DetailsRequestModalProps = {
    req:Request
}

type StatusVariantType = Record<StatusRequestEnum,{style:string,text:string}>

export function DetailsRequestModal({req}:DetailsRequestModalProps){

    const statusVariants:StatusVariantType = {
        0:{
            text:"Pendente",
            style:"bg-blue-400 border border-blue-600 text-white"
        },
        1:{
            text:"Aceita",
            style:"bg-he-green-400 border border-he-green-600 text-white"
        },
        2:{
            text:"Rejeitada",
            style:"bg-red-400 border border-red-600 text-white"
        },
        3:{
            text:"Cancelada",
            style:"bg-gray-400"
        }
    }

    return (
        <div className="w-full flex flex-col gap-4 justify-between h-full">

            {
                req.status !== StatusRequestEnum.AWAIT && 
                <div className={twMerge("flex flex-row text-center justify-center rounded-[10px] gap-2 p-2",statusVariants[req.status].style)}>
                    <p> Essa requisicao está <span>{statusVariants[req.status].text}</span></p>
                </div>
            }

            <main className="flex flex-col gap-1 w-full h-full" >
               <p>
                    O interessado <span className="font-black">{req.owner.name}</span>, 
                    <span className="font-black">{!!req.owner.cellphone  ? ` do telefone ${req.owner.cellphone}`:""} </span>
                    deseja alugar a area <span className="font-black">{req.area.name}</span> nos peridos:
               </p>

               <Page.ScrollY className="max-h-[200px] p-2" areaScrollClass="gap-1">
                {
                    req.schedule.map((s,i)=>(
                        <div key={i} className="p-2 text-[14px] md:text-[16px] border border-gray-300 rounded-[4px]">
                            No dia: {onlYDate(s.date)} das {times(s.start_time)} ate  {times(s.end_time)}
                        </div>
                    ))
                }
               </Page.ScrollY>

                <div className="flex flex-col gap-1">
                    <p className="text-[14px] md:text-[16px]">
                        Para o evento: 
                    </p>
                    <span className="p-2 pl-8 font-semibold">{req.nameEvent}</span>
                </div>
               

                {
                    req.message.length > 0 && 
                    (
                        <div className="flex flex-col gap-1">
                            <span>{req.owner.name} deixou uma mensagem junto da solicitacao:</span>

                            <span className="p-3 ml-6 rounded-xl bg-he-green-50 text-white w-[70%]">
                                {req.message}
                            </span>
                        </div>
                    )
                }

            </main>

          

        </div>
    )
}