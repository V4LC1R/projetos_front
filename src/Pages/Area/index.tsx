import { Form } from "@components/__common/Form";
import { Modal } from "@components/__common/Modal";
import { Page } from "@components/__common/Page";
import { ProfileAreaGuest } from "@components/Area/ProfileAreaGuest";
import { Spin } from "@components/Spin";
import { Area } from "@services/Area";
import areaService from "@services/Area/area.service";
import requestService from "@services/Request/request.service";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaExclamation, FaMinus, FaPlug, FaPlus } from "react-icons/fa";
import { useNavigate, useParams } from "react-router";
import { twMerge } from "tailwind-merge";

export function AreaPage(){
    const { id } = useParams();
    const navigate = useNavigate();

    const [area,setArea] = useState<Area | null>(null)
    const [schedulesIds,setSchedulesIds] = useState<number[]>([])
    const [openFinalForm,setOpenFinalForm] = useState<boolean>(false)
    const [eventName,setEventName] = useState<string>("");
    const [message,setMessage] = useState<string>("");

    async function loadArea() {
        if(!id)
            return

        const areaProfile = await areaService.show(parseInt(id))


        setArea(()=>areaProfile)
    }

    function selectSchedule(id:number){
        if(schedulesIds.includes(id)){
            setSchedulesIds((prev)=>prev.filter((s)=>s !== id))
        }else{
            setSchedulesIds((prev)=>[...prev,id])
        }
    }

    function handleSubmit(){
        if(schedulesIds.length === 0){
            toast.error("Selecione pelo menos um horario")
            return
        }

        if(!area){
            toast.error("Area nao encontrada")
            return
        }

        toast.promise(
            requestService.create({
                areaId: area.id,
                schedules: schedulesIds,
                nameEvent: eventName,
                message: message
            }),
            {
                loading: "Enviando solicitação...",
                success: (data) => {
                    setOpenFinalForm(false)
                    setSchedulesIds([])
                    loadArea()
                    return "Solicitação enviada com sucesso!"
                },
                error: (err) => {
                    console.error(err)
                    return "Erro ao enviar solicitação"
                }
            }
        )

        setOpenFinalForm(!openFinalForm)
        navigate(`/app/my-requests`)
        
    }

    useEffect(()=>{
        loadArea()
    },[])
    return(
       
        <>
            <Modal 
                className="w-[500px] h-auto"
                isOpen={openFinalForm}
                onRequestClose={()=> setOpenFinalForm(e=>!openFinalForm)}
            >
                <div className="w-full h-full flex flex-col gap-1">
                    <header className="w-full">
                        <h1 className=" text-xl font-extrabold text-he-gray-400">
                            Solicar Área
                        </h1>
                    </header>
                    <main className="w-full h-full flex flex-col gap-2">
                        <Form.Input
                            type="text"
                            className="w-full"
                            label="Nome do Evento"
                            placeholder="Digite o nome do evento"
                            required
                            value={eventName}
                            onChange={(e)=>setEventName(e.target.value)}
                        />

                        <Form.Input
                            type="text"
                            value={message}

                            className="w-full"
                            label="Mensagem ao Propietario"
                            placeholder="....Digite uma mensagem ao propietario"
                            required
                            onChange={(e)=>setMessage(e.target.value)}
                        />
                    </main>
                    
                    <div className="w-full flex flex-row gap-2 justify-end">
                        <Form.Button onClick={()=>handleSubmit()}>
                            Solicitar!
                        </Form.Button>

                    </div>
                    
                </div>
            </Modal>

            <Page.Body className="py-2 md:h-auto">
            {
                !area ?
                (
                    <div className="w-full h-full flex flex-col items-center justify-center">
                        <Spin/>
                    </div>
                ):
                (
                    <>
                    
                        <Page.Header title={area?.name}/>

                        <Page.Main>
                            <ProfileAreaGuest profile={area ?? {} as Area}/>
                            <div className="w-full flex flex-row justify-start">
                                <span>
                                    Horarios
                                </span>
                            </div>
                            <Page.ScrollY className="min-h-[32svh] max-h-[32svh] bg-gray-50" areaScrollClass="gap-4">
                                {
                                    area.schedule.map((s,i)=>(
                                        <div key={i} className={twMerge(
                                            "flex flex-row gap-1 items-center p-1 border-he-green-300 border-[0.5px] rounded-[4px] justify-between",
                                            schedulesIds.includes(s.id) ? "bg-green-50" : "bg-white"
                                        )}>
                                            <Form.Input
                                                disabled
                                                type="date"
                                                className="w-[35%]"
                                                value={dayjs(s.date).format("YYYY-MM-DD")}
                                                
                                            />
                                            <Form.Input
                                                disabled
                                                type="time"
                                                className="w-[25%]"
                                                value={dayjs(s.start_time).format("HH:mm")}
                                            
                                            />
                                            <Form.Input
                                                disabled
                                                type="time"
                                                className="w-[25%]"
                                                value={dayjs(s.end_time).format("HH:mm")}
                                                
                                            />

                                        <Form.Button onClick={()=>selectSchedule(s.id)} className="flex flex-row items-center gap-1">
                                        {
                                                schedulesIds.includes(s.id)
                                                ? <FaMinus />
                                                : <FaPlus/>
                                            
                                        }
                                        </Form.Button>
                                        
                                        </div>
                                    ))
                                }
                            </Page.ScrollY>

                            <Form.Button onClick={()=>setOpenFinalForm(!openFinalForm)} className="w-full">
                                <span className="flex flex-row items-center gap-1">
                                    <FaExclamation/>
                                    Solicitar Area
                                </span>
                            </Form.Button>

                        </Page.Main>
                    </>

                )
            }
        </Page.Body>
        
        </>
    
    )
}