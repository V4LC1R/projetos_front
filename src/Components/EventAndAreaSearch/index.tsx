import { Form } from "@components/__common/Form";
import { Page } from "@components/__common/Page";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { FaFilter, FaSearch } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { redirect,useNavigate } from "react-router";

export function EventAndAreaSearch() {

  const [params,setParams] = useState('');
  const navigate = useNavigate();

  const [showFilters, setShowFilters] = useState(false);

  function handleShowFilters(e:React.MouseEvent){
      e.preventDefault()
      setShowFilters(!showFilters)
  }

  function handleSearch(e:React.MouseEvent){
      e.preventDefault()
      navigate(`/app/finder/?search=${params}`)
  }
  
    return (
      <Page.Body className="md:h-[600px] md:w-[450px] h-[600px] w-full py-2 gap-2">

        <Page.Header  title="Encontre sua Área" hasBack={false}/>

        <form className="w-full">
          <Page.Main className="w-full flex flex-row gap-1 items-end justify-end">     
            <div className="flex flex-col gap-2 w-full">
              <Form.Input 
                label="Nome"
                className="h-[37px]" 
                placeholder="Pesquise pelo nome da area"
              />
              {
                showFilters && (
                  <div className="flex justify-between  flex-row gap-1 w-full">
                    <Form.Input 
                      label="Distância"
                      className="h-[37px] w-[10]" 
                      placeholder="Padrao: 10km"
                    />

                    <Form.Input 
                      label="Esporte"
                      className="h-[37px] w-[10]" 
                      placeholder="Futbol, Volei, etc."
                    />
                  </div>
                )
              }
            </div> 
                 
            <div className={`${ showFilters ? 'flex-col justify-end gap-2.5' : 'flex-row justify-end'} h-full flex gap-1`}>
              <Form.Button onClick={handleShowFilters}><FaFilter/></Form.Button>
              <Form.Button onClick={handleSearch}><FaSearch/></Form.Button>
            </div>
          </Page.Main>
        </form>
      
      <footer className="w-full px-2 mt-3 h-full rounded-t-[4px] overflow-hidden">
        <header className="bg-he-green-100 text-center flex flex-col justify-center text-white h-[40px] font-bold text-[14px] py-1">
            <h4>Ultimas pesquisas</h4>
        </header>

        <Page.ScrollY 
          className="w-full h-[370px] flex flex-col items-center justify-start overflow-y-auto border-l-1 border-r-1 border-b-1 border-he-gray-100 rounded-bl-[4px] rounded-br-[4px]"
        >
          <h1>vasco</h1>
        </Page.ScrollY>

        
      </footer>
       
        
      </Page.Body>

    );
}