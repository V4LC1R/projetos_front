import { Page } from "@components/__common/Page";
import { Event } from "@services/Event";
import { onlYDate, times } from "@services/Format/Date";

export type DetailsEventModalProps = {
    event:Event
}

export function DetailsEventModal({event}:DetailsEventModalProps){
    console.log(event.area)

    return (
        <div className="w-full flex flex-col gap-4 justify-between h-full">

            <main className="flex flex-col gap-1 w-full h-full" >
               <p>
                    <span className="font-black">{event.name}</span>, 
                  
                    vai ocorrer na area <span className="font-black">{event.area.name}</span> nos peridos:
               </p>

                <Page.ScrollY className="max-h-[200px] p-2" areaScrollClass="gap-1">
                    {
                        event.schedule.map((s,i)=>(
                            <div key={i} className="p-2 text-[14px] md:text-[16px] border border-gray-300 rounded-[4px]">
                                No dia: {onlYDate(s.date)} das {times(s.start_time)} ate  {times(s.end_time)}
                            </div>
                        ))
                    }
                </Page.ScrollY>

                <div className="flex flex-col gap-1 p-2">
                    <span className="font-bold">Endereco</span>
                    <div className="p-2 flex flex-col w-full">
                       <div className="flex flex-row gap-2">
                        <div>
                                <label htmlFor="">Rua:</label>
                                <span className="p-2 pl-8 font-semibold">{event.area.address.street}</span>
                            </div>

                            <div>
                                <label htmlFor="">Numero:</label>
                                <span className="p-2 pl-8 font-semibold">{event.area.address.number_place}</span>
                            </div>
                       </div>

                        <div>
                            <label htmlFor="">Bairro:</label>
                            <span className="p-2 pl-8 font-semibold">{event.area.address.district}</span>
                        </div>

                        <div>
                            <label htmlFor="">Complemento:</label>
                            <span className="p-2 pl-8 font-semibold">{event.area.address.complement}</span>
                        </div>
                    </div>

                    <div>

                    </div>
                
                </div>
            </main>

        </div>
    )
}