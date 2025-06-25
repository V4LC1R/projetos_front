import { Form } from "@components/__common/Form";
import { Page } from "@components/__common/Page";
import { Row } from "@components/Area/Row";
import { RequestRow } from "@components/Request/row";
import { Area } from "@services/Area";
import areaService from "@services/Area/area.service";
import { MouseEvent, useEffect, useState } from "react";
import { FaPlus, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router";

export function MyAreasPage(){
    const navi = useNavigate()
    const [myAreas,setMyAreas] = useState<Area[]>([])

    function handleCreateArea(e:MouseEvent){
        e.preventDefault()
        navi('/app/my-area')
    }

    async function loadMyAreas(){
        const areas = await areaService.myAreas()
        setMyAreas(()=>areas)
    }

    useEffect(()=>{
        loadMyAreas()
    },[])

    return(
        <Page.Body className="py-2 h-[calc(100svh-4rem)]">
            <Page.Header title="Minhas Areas" />
            <Page.Main>
                <form className="flex flex-row w-full items-end gap-1">
                    <Form.Input
                        label="Area"
                        placeholder="Pesquise aqui suas areas"
                    />
                    <Form.Button className="w-[46.5px] h-[42.5px]">
                        <FaSearch/>
                    </Form.Button>
                    <Form.Button onClick={handleCreateArea} className="w-[46.5px] h-[42.5px]">
                        <FaPlus/>
                    </Form.Button>
                </form>

                <Page.ScrollY className="h-[calc(100%-5rem)] ">
                    {
                        myAreas.map((a,i)=><Row key={i} area={a}/>)
                    }
                </Page.ScrollY>
            </Page.Main>
        </Page.Body>
    )
}