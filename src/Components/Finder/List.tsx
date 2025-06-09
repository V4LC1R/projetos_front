import { Page } from "@components/__common/Page";
import { Row } from "./Row";

type ListProps = {
    dataList:any[],
    className?:string
}

export function List({dataList,className}:ListProps){
    return(
        <Page.ScrollY className={className}>
            {dataList.map((data) =><Row/>)}
        </Page.ScrollY>
    );
}