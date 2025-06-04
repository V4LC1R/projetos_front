import { Form } from "@components/__common/Form";
import { Page } from "@components/__common/Page";
import { Request } from "@components/Request";
import { Button } from "primereact/button";
import { FaSearch } from "react-icons/fa";


export function NotificationPage() {
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
                    <Request.Row/>
                </Page.ScrollY>
            </Page.Main>
        </Page.Body>
    )
}