import { IoSearch } from "react-icons/io5"
import { HeaderSearch } from "./HeaderSearch"
import { ListSearch } from "./ListSearch"
import { SearchRow } from "./SearchRow"
import { useState } from "react"
import { SpinWithMessage } from "@components/Spin/SpinWithMessage"
import { useNavigate, useSearchParams } from "react-router"

export function EventAndAreaList() {
    const [dataList,setDataList] = useState([{}])
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [isLoading, setIsloading] = useState<boolean>(false);
    const [params,setParams] = useState(searchParams.get('search') || '');

    function handleSearch(e:React.MouseEvent){
      e.preventDefault()
      navigate(`/?search=${params}`)
      console.log(params)
  }

    return (
        <div className="relative md:h-[700px] h-full w-full flex flex-col items-center justify-start pt-1">
           <HeaderSearch/>
    
            <div className="bg-white w-[calc(100svw-0.9rem)] md:w-[400px] h-[calc(100svh-60px)] gap-1 z-2 rounded-tl-[8px] rounded-tr-[8px] shadow-md flex flex-col items-center px-2.5 py-2 justify-start">
                <div className="border-1 flex w-full border-he-gray-600 rounded-md mt-2 p-0.5 ">
                    <input
                        value={params}
                        onChange={(e) => {
                            setParams(e.target.value)
                        }}
                        className="w-full font-medium px-1" 
                        type="text" 
                        placeholder="Modalidade,evento ou local" 
                    />
                    <button  type="submit" onClick={handleSearch} className=" w-15 h-12 bg-he-green-100 text-white text-2xl text-center rounded-[4px] flex flex-col justify-center items-center  ">
                        <IoSearch/>
                    </button>
                </div>
    
                <ListSearch>
                    {
                        dataList.length > 0 ? (
                            isLoading ? (
                               <SpinWithMessage
                                message="Procurando"
                                sizeSpin={54}
                               />
                            ) 
                            : dataList.map((data) => (
                                <SearchRow/>
                            )) 

                        ) : (
                            <div className="w-full h-[220px] flex flex-col items-center justify-center ">
                                <h3 className="font-bold">Nenhum resultado encontrado</h3>
                                <span className="font-light text-[12px]">Tente outra pesquisa</span>
                            </div>
                        )
                    }
                    
                </ListSearch>
            </div>
        
               
        </div>
    )
}