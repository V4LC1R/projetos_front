import { Form } from "@components/__common/Form";
import { Modal } from "@components/__common/Modal";
import { Page } from "@components/__common/Page";
import { Request as RequestComponent } from "@components/Request";
import { DetailsRequestModal } from "@components/Request/detailsRequestModal";
import requestService from "@services/Request/request.service";
import { Request, StatusRequestEnum } from "@services/Request/request.type";
import { MouseEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaSearch } from "react-icons/fa";


export function AreasRequest() {

    const [request,setRequest] = useState<Request[]>([])
    const [openDetails,setOpenDetails] = useState<boolean>(false)
    const [requestOpened,setRequestOpened] = useState<Request>({} as Request)

    async function loadRequests(){
        const data = await requestService.toOwner();
        setRequest(()=>data)
    }

    function handleDetails(req:Request){
        setRequestOpened(()=>req)
        setOpenDetails(e=>!openDetails)
    }

    function selectItem(status:StatusRequestEnum){

        const updateRequests = [...request];
        const indexProduct = updateRequests.findIndex(idItem=>idItem.id === requestOpened.id);
        const updateItem = {...requestOpened};
        updateItem.status = status;
        
        if(indexProduct>=0){
            updateRequests.splice(indexProduct,1);

            updateRequests.push(updateItem)
        }
    
        setRequest(updateRequests);
    
    }

    async function handleAcept(){

        try {
            await toast.promise(
                requestService.ownerAcept(requestOpened.id),
                {
                    loading: 'Rejeitando...',
                    success: <b>A requisicao foi rejeitada</b>,
                    error: <b>Desculpe mas algo deu errado</b>,
                  }
            )
            selectItem(StatusRequestEnum.ACEPT)
            setOpenDetails(e=>!openDetails)
            
        } catch (error) {
            
        }
    }

    async function handleReject(){
        try {
            await toast.promise(
                requestService.ownerReject(requestOpened.id),
                {
                    loading: 'Rejeitando...',
                    success: <b>A requisicao foi rejeitada</b>,
                    error: <b>Desculpe mas algo deu errado</b>,
                  }
            )
            selectItem(StatusRequestEnum.REJECT)
            setOpenDetails(e=>!openDetails)
            
        } catch (error) {
            
        }
    }

    useEffect(()=>{
        loadRequests()
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
                            Solicitação de uso da área
                        </h1>
                    </header>
                    <DetailsRequestModal req={requestOpened}/>
                    {
                        requestOpened.status === StatusRequestEnum.AWAIT &&
                        <div className="w-full flex flex-row gap-2 justify-end">
                            <Form.Button 
                                variant="secondary"
                                onClick={handleReject}
                            >
                                Rejeitar
                            </Form.Button>
                            <Form.Button 
                                
                                onClick={handleAcept}
                            >
                                Aceitar
                            </Form.Button>
                        </div>
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
                                <div onClick={()=>handleDetails(r)} key={i}>
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