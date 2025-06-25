import { Page } from "@components/__common/Page";
import { Row } from "./Row";
import { AreaByPosition } from "@services/Area";

type ListProps = {
    dataList:AreaByPosition[],
    className?:string
}

export function List({dataList,className}:ListProps){
    return(
        <Page.ScrollY className={className}>
            {dataList.map((data:AreaByPosition) =><Row area={data}/>)}
        </Page.ScrollY>
    );
}