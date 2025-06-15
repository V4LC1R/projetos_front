import { Page } from "@components/__common/Page";
import { ProfileAreaGuest } from "@components/Area/ProfileAreaGuest";
import { Spin } from "@components/Spin";
import { Area } from "@services/Area";
import areaService from "@services/Area/area.service";
import { useEffect, useState } from "react";
import { ProfileGuest } from "@components/Area/ProfileGuest";
import { useParams } from "react-router";

export function AreaPage(){
    const { id } = useParams();

    const [area,setArea] = useState<Area | null>(null)

    async function loadArea() {
        if(!id)
            return

        const areaProfile = await areaService.show(parseInt(id))

        setArea(()=>areaProfile)
    }

    useEffect(()=>{
        loadArea()
    },[])
    return(
        <Page.Body className="py-2">
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
                            <Page.ScrollY className="gap-2 h-70">
                            <span className="w-full bg-amber-200 h-30"/>
                            
                            </Page.ScrollY>

                        </Page.Main>
                    </>

                )
            }
        </Page.Body>

    
    )
}