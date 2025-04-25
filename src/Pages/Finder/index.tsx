
import { useState } from "react";

import { EventAndAreaList } from "@components/EventAndAreaList";
import { EventAndAreaSearch } from "@components/EventAndAreaSearch";
import { SpinWithMessage } from "@components/Spin/SpinWithMessage";
import { useSearchParams } from "react-router";
export function FinderPage()
{
   let [searchParams] = useSearchParams();
  const [isLoading, setIsloading] = useState<boolean>(false);
  console.log(searchParams.get("search"));
  return (
    <>
     {/* <EventAndAreaList/> */}
      { isLoading 
        ? 
          <div className=" w-full bg-white md:h-[300px] md:w-[400px] h-[350px] z-2 rounded-tl-[8px] rounded-tr-[8px] md:rounded-[8px] py-1 mt-1 flex flex-col items-center justify-center">
            <SpinWithMessage message="Procurando"/>
          </div> 
        : !!searchParams.get("search") 
            ? <EventAndAreaList/>
            : <EventAndAreaSearch/>
      }
    </>
  )
}