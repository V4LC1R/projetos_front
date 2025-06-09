import { Page } from "@components/__common/Page";
import { Filters, List, NoData } from "@components/Finder";
import { SpinWithMessage } from "@components/Spin/SpinWithMessage";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";


export function AreaAndEventListPage() {
    const [dataList,setDataList] = useState([{}])
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [isLoading, setIsloading] = useState<boolean>(false);
    const [params,setParams] = useState(searchParams.get('search') || '');

    return (
        <>
               {
                    isLoading 
                        ?(
                            <SpinWithMessage
                                message="Procurando"
                                sizeSpin={54}
                            />
                        )
                        : dataList.length > 0 
                            ? <List dataList={dataList}/>
                            : <NoData/>
               }
        </>

    )
}