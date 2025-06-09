import { Page } from "@components/__common/Page";
import { Filters, List, NoData } from "@components/Finder";
import { SpinWithMessage } from "@components/Spin/SpinWithMessage";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router";


export function EventAndAreaSearch() {
  const [dataList,setDataList] = useState([{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}])
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [params,setParams] = useState(searchParams.get('search') || '');

  return (
    <Page.Body className="md:h-auto md:w-[450px] w-full py-2 gap-2">
      <Page.Header  title="Encontre sua Área" removeBack/>
      <Filters/>
      {

        !!searchParams.get('search') &&
          <Page.Main className="overflow-hidden">
            {
              isLoading
                ?(
                    <SpinWithMessage
                        message="Procurando"
                        sizeSpin={54}
                    />
                )
                : dataList.length > 0 
                    ? <List 
                      className="md:h-[470px] h-[calc(100svh-12rem)]" 
                      dataList={dataList}
                    />
                    : <NoData/>
            }
          </Page.Main>
      }
    </Page.Body>
  );
}