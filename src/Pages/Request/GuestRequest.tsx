import { Form } from "@components/__common/Form";
import { Modal } from "@components/__common/Modal";
import { Page } from "@components/__common/Page";
import { Request as RequestComponent } from "@components/Request";
import { onlYDate, times } from "@services/Format/Date";
import requestService from "@services/Request/request.service";
import { Request, StatusRequestEnum } from "@services/Request/request.type";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaSearch } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

type StatusVariantType = Record<StatusRequestEnum,{style:string,text:string}>

export function GuestRequest() {

    const [request,setRequest] = useState<Request[]>([])
    const [openDetails,setOpenDetails] = useState<boolean>(false)
    const [requestOpened,setRequestOpened] = useState<Request>({} as Request)

    async function loadRequests(){
        const data = await requestService.byGuest();
        setRequest(()=>data)
    }

    function handleDetails(req:Request){
        setOpenDetails(e=>!openDetails)
        setRequestOpened(()=>req)
        
    }

    function handleCancelRequest(){
        toast.promise(
            requestService.delete(requestOpened.id),
            {
                loading: "Cancelando solicitação...",
                success: () => {
                    removeRequest();
                    setOpenDetails(false);
                    return "Solicitação cancelada com sucesso!";
                },
                error: () => {
                    setOpenDetails(false);
                    return "Erro ao cancelar solicitação, tente novamente mais tarde!";
                }
            }
        )
    }

    function removeRequest(){
        const updateRequests = [...request];
        const indexProduct = updateRequests.findIndex(idItem=>idItem.id === requestOpened.id);
        const updateItem = {...requestOpened};
        
        if(indexProduct>=0){
            updateRequests.splice(indexProduct,1);

        }
    
        setRequest(()=>updateRequests);
    }

    useEffect(()=>{
        loadRequests()
    },[])

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

        <>
            <Modal
                isOpen={openDetails }
                onRequestClose={()=>setOpenDetails(false)}
               
                className="w-full md:w-[500px] h-[500px]"
            >
                <div className="w-full flex flex-col gap-4 justify-between h-full pt-6">

                    {
                        !!requestOpened.id  &&
                        <div className={twMerge("flex flex-row text-center justify-center rounded-[10px] gap-2 p-2",statusVariants[requestOpened.status]?.style)}>
                            <p> Essa requisição está <span>{statusVariants[requestOpened.status].text}</span></p>
                        </div>
                    }
                
                    <main className="flex flex-col gap-1 w-full h-full" >
                        <p>
                            <span className="font-black">{requestOpened.nameEvent} </span>, 
                            
                            vai ocorrer na area <span className="font-black">{!requestOpened.area?.name ? 'S/N' : requestOpened.area.name}</span> nos peridos:
                        </p>
        
                        <Page.ScrollY className="max-h-[200px] p-2" areaScrollClass="gap-1">
                            {
                                requestOpened.schedule?.map((s,i)=>(
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
                                        <span className="p-2 pl-8 font-semibold">{requestOpened.area?.address.street}</span>
                                    </div>
        
                                    <div>
                                        <label htmlFor="">Numero:</label>
                                        <span className="p-2 pl-8 font-semibold">{requestOpened.area?.address.number_place}</span>
                                    </div>
                                </div>
        
                                <div>
                                    <label htmlFor="">Bairro:</label>
                                    <span className="p-2 pl-8 font-semibold">{requestOpened.area?.address.district}</span>
                                </div>
        
                                <div>
                                    <label htmlFor="">Complemento:</label>
                                    <span className="p-2 pl-8 font-semibold">{requestOpened.area?.address.complement}</span>
                                </div>
                            </div>
        
                            <div>
        
                            </div>
                        
                        </div>
                    </main>
                
                    {
                        requestOpened.status == StatusRequestEnum.AWAIT &&
                        (
                            <footer className="w-full flex flex-col gap-2">
                                <Form.Button onClick={()=>handleCancelRequest()} className="bg-yellow-600 hover:bg-yellow-700">
                                    Cancelar Solicitação
                                </Form.Button>
                            </footer>
                        )
                    }
                </div>
            </Modal>    
            <Page.Body className=" h-[600px] w-ful py-2 gap-2">
                <Page.Header title="Solicitações" />

                <Page.Main>
                    {/* <div className="w-full flex flex-row items-end gap-1 justify-start ">
                        <Form.Input
                            placeholder="Pesquisar por nome da área ou pessoa"
                        />
                        <div className='flex-row items-end flex mb-1 gap-1'>
                            <Form.Button className="h-[42px] w-[47px]"><FaSearch/></Form.Button>
                        </div>
                    </div> */}
                
                    <Page.ScrollY className="md:h-[470px] h-[470px]">
                        {
                            request.map((r,i)=>(
                               <div key={i} onClick={()=>handleDetails(r)}>
                                  <RequestComponent.Row req={r} />
                               </div>
                            ))
                        }
                        
                    </Page.ScrollY>
                </Page.Main>
            </Page.Body>
        </>
    )
}