import { Form } from "@components/__common/Form";
import { Page } from "@components/__common/Page";
import { Event } from "@services/Event";
import { onlYDate, times } from "@services/Format/Date";
import { Request } from "@services/Request/request.type";

export type DetailsEventModalProps = {
    event:Event
}

export function DetailsEventModal({event}:DetailsEventModalProps){
    console.log(event)

    return (
        <div className="w-full flex flex-col gap-4 justify-between h-full">

            <main className="flex flex-col gap-1 w-full h-full" >
               <p>
                    O evento <span className="font-black">{event.name}</span>, 
                  
                    vai ocorrer na area <span className="font-black">{event.area.name}</span> nos peridos:
               </p>

               {/* <Page.ScrollY className="max-h-[200px] p-2" areaScrollClass="gap-1">
                {
                    event.schedule.map((s,i)=>(
                        <div key={i} className="p-2 text-[14px] md:text-[16px] border border-gray-300 rounded-[4px]">
                            No dia: {onlYDate(s.date)} das {times(s.start_time)} ate  {times(s.end_time)}
                        </div>
                    ))
                }
               </Page.ScrollY> */}

              

            </main>

        </div>
    )
}