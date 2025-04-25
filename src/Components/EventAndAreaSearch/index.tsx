import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { redirect,useNavigate } from "react-router";

export function EventAndAreaSearch() {

  const [params,setParams] = useState('');
  const navigate = useNavigate();

  function handleSearch(e:React.MouseEvent){
      e.preventDefault()
      navigate(`/?search=${params}`)
      console.log(params)
  }
  
    return (
        <div className="w-full md:w-[400px] h-[400px] z-2 px-1 md:pt-1">
          <div className="bg-white w-full h-full rounded-tl-[8px] rounded-tr-[8px] shadow-md flex flex-col items-center px-2.5 py-2 justify-start">
            <header className="text-center w-full text-[18px] font-bold text-he-green-600">
              Encontre area ou Evento!
            </header>

            <main className="w-full">

              <div className="border-1 flex w-full border-he-gray-600 rounded-md mt-2 p-0.5 ">
                <input
                  onChange={(e) =>setParams(e.target.value)}
                  className="w-full font-medium px-1" 
                  type="text" 
                  placeholder="Modalidade,evento ou local" 
                />
                <button
                  type="submit"
                  onClick={handleSearch}
                  className=" w-15 h-12 bg-he-green-100 text-white text-2xl text-center rounded-[4px] flex flex-col justify-center items-center  ">
                  <IoSearch/>
                </button>
              </div>
            </main>

            <footer className="w-full mt-3 h-full rounded-t-xl overflow-hidden">
              <header className="bg-he-green-100 text-center flex flex-col justify-center text-white h-[50px] font-bold text-[18px] py-1">
                  <h4>Ultimas pesquisas</h4>
              </header>

              <div className="w-full h-[220px] flex flex-col items-center justify-start overflow-y-auto border-1 border-he-gray-100 rounded-b-xl">

              </div>
            </footer>
          </div>
        </div>
    );
}