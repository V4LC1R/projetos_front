import { Form } from "@components/__common/Form";
import { Page } from "@components/__common/Page";
import { onlYDate, times } from "@services/Format/Date";
import { Request } from "@services/Request/request.type";

export type DetailsRequestModalProps = {
    req:Request
}

export function DetailsRequestModal({req}:DetailsRequestModalProps){

    return (
        <div className="w-full flex flex-col gap-4 justify-between h-full">

            <main className="flex flex-col gap-1 w-full h-full" >
               <p>
                    O interessado <span className="font-black">{req.owner.name}</span>, 
                    <span>{!!req.owner.cellphone  ? ` do telefone ${req.owner.cellphone}`:""} </span>
                    deseja alugar a area nos peridos:
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