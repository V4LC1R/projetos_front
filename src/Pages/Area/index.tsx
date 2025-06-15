import { Page } from "@components/__common/Page";
import { ProfileGuest } from "@components/Area/ProfileGuest";
import { useParams } from "react-router";

export function AreaPage(){
    const { id } = useParams();

    return(
        <Page.Body className="py-2">
            <Page.Header title="Area X"/>

            <Page.Main>
                <ProfileGuest/>
                <div className="w-full flex flex-row justify-start">
                    <span>
                        Horarios
                    </span>
                </div>
                <Page.ScrollY className="gap-2 h-70">
                   <span className="w-full bg-amber-200 h-30"/>
                   
                </Page.ScrollY>

            </Page.Main>

        </Page.Body>

    
    )
}