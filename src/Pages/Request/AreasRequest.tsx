import { Form } from "@components/__common/Form";
import { Page } from "@components/__common/Page";
import { Request as RequestComponent } from "@components/Request";
import requestService from "@services/Request/request.service";
import { Request } from "@services/Request/request.type";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";


export function AreasRequest() {

    const [request,setRequest] = useState<Request[]>([])


    async function loadRequests(){
        const data = await requestService.toOwner();
        setRequest(()=>data)
    }

    useEffect(()=>{
        loadRequests()
    },[])

    return (

        <Page.Body className=" h-[600px] w-ful py-2 gap-2">
            <Page.Header title="Solicitações" />

            <Page.Main>
                <div className="w-full flex flex-row items-end gap-1 justify-start ">
                    <Form.Input
                        placeholder="Pesquisar por nome da área ou pessoa"
                    />
                    <Form.Button className="h-[42.5px]"><FaSearch/></Form.Button>
                </div>
            
                <Page.ScrollY className="md:h-[470px] h-[470px]">
                    {
                        request.map((r,i)=>(
                            <RequestComponent.Row req={r} key={i}/>
                        ))
                    }
                    
                </Page.ScrollY>
            </Page.Main>
        </Page.Body>
    )
}