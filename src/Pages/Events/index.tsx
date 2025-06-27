import { Form } from "@components/__common/Form";
import { Modal } from "@components/__common/Modal";
import { Page } from "@components/__common/Page";
import { Event as EventComponents } from "@components/Event";
import { Event } from "@services/Event";
import eventService from "@services/Event/event.service";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";


export function EventsPage() {

    const [events,setEvents] = useState<Event[]>([])
    const [openDetails,setOpenDetails] = useState<boolean>(false)
    const [eventOpened,setEventOpened] = useState<Event>({} as Event)

    async function loadEvents(){
        const data = await eventService.byGuest();
        setEvents(data);
    }

    function handleDetails(event:Event){
        setEventOpened(()=>event)
        setOpenDetails(e=>!openDetails)
    }

    useEffect(()=>{
        loadEvents()
    },[])

    return (

       <>
            <Modal 
                className="w-[500px]"
                isOpen={openDetails}
                onRequestClose={()=> setOpenDetails(e=>!openDetails)}

            >
                <div className="w-full h-full flex flex-col gap-1">
                    <header className="w-full">
                        <h1 className=" text-xl font-extrabold text-he-gray-400">
                           Evento
                        </h1>
                    </header>
                    <EventComponents.Detail event={eventOpened}/>
                   
                    <div className="w-full flex flex-row gap-2 justify-end">
                        <Form.Button 
                            className="bg-he-red-400 hover:bg-he-red-500 text-white"
                        >
                            Cancelar
                        </Form.Button>
                    
                    </div>
                    
                </div>
            </Modal>
       
            <Page.Body className=" h-[600px] w-ful py-2 gap-2">
                <Page.Header title="Eventos" />

                <Page.Main>
                    <div className="w-full flex flex-row items-end gap-1 justify-start ">
                        <Form.Input
                            placeholder="Pesquisar por nome da área ou pessoa"
                        />
                        <Form.Button className="h-[42.5px]"><FaSearch/></Form.Button>
                    </div>
                
                    <Page.ScrollY className="md:h-[470px] h-[470px]">
                        {
                            events.map((r,i)=>(
                                <div onClick={()=>handleDetails(r)} key={i}>
                                    <EventComponents.Row req={r} />
                                </div>
                            ))
                        }
                        
                    </Page.ScrollY>
                </Page.Main>
            </Page.Body>
       </>
    )
}