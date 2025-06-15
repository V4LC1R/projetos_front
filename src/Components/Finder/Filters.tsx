import { Form } from "@components/__common/Form";
import { Page } from "@components/__common/Page";
import { useState } from "react";
import { FaFilter, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router";

type FiltersProps={
    onSearch:()=>void
}

export function Filters(){
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
        <form className="md:w-full">
            <Page.Main className="w-full h-auto flex flex-row gap-1 items-end justify-start">     
                <div className="flex flex-col gap-2 w-full">
                    <Form.Input 
                        onChange={e=>setParams(e.target.value)}
                        label="Nome"
                        className="h-[37px]" 
                        placeholder="Pesquise pelo nome da area"
                    />
                    {
                    showFilters && (
                        <div className="flex justify-between  flex-row gap-1 w-full">
                        <Form.Input 
                            label="Distância"
                            className="h-[37px] md:w-[10]" 
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
                        
                <div className={`${ showFilters ? 'flex-col gap-3 justify-end h-full' : 'flex-row items-end'} flex gap-1`}>
                    <Form.Button type="submit" onClick={handleSearch}><FaSearch/></Form.Button>
                    <Form.Button onClick={handleShowFilters}><FaFilter/></Form.Button>
                </div>
            </Page.Main>
        </form>
    )
}