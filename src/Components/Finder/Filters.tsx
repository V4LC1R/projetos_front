import { Form } from "@components/__common/Form";
import { OptionProps } from "@components/__common/Form/select";
import { Page } from "@components/__common/Page";
import { useInteration } from "@context/InterationContext";
import { Area, AreaByPosition } from "@services/Area";
import areaService from "@services/Area/area.service";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useSearchParams } from "react-router";

type FiltersProps={
    onSearch:(areas:AreaByPosition[])=>void
}

export function Filters({onSearch}:FiltersProps){
    const [category,setCategory] = useState<number>();
    const [searchParams,setSearchParams] = useSearchParams();
    const [categoriesOptions,setCategoriesOptions]= useState<OptionProps[]>([])
    const [distance,setDistance] = useState<number>(10)
    const {location} = useInteration()

    async function handleSearch(e:React.MouseEvent){
        e.preventDefault()

        if(!category)
            return

        await search(category,distance)
        
    }

    async function search(c:number,d:number){

        try{
            const areas = await areaService.byPosition({
                categories:[c],
                distance:d,
                lat:String(location.latitude),
                lng:String(location.longitude)
            });

            onSearch(areas)

            setSearchParams({
                categories: String(c),
                distance: String(d)
            });
        }catch(e:AxiosError | any){
            console.log(e)
        }
    }

    function changeDistance(distance:string){
        if(!distance || distance.length <= 0)
           return setDistance(()=>0)

        setDistance(()=>parseInt(distance))
    }

    async function loadCategories(){

        const categories = await areaService.categories()

        if(!searchParams.get("categories"))
            setCategory(()=>categories[0].id)

        setCategoriesOptions(()=>categories.map(c=>({
            label:c.name,
            value:c.id
        })))
    
    }

    useEffect(()=>{
    
        const categoriesParam = searchParams.get("categories")
        const distanceParam = searchParams.get("distance")

        if(distanceParam)
            setDistance(()=>parseInt(distanceParam))

        if(categoriesParam)
            setCategory(()=>parseInt(categoriesParam))
        
        if(distanceParam && categoriesParam){
            search(parseInt(categoriesParam),parseInt(distanceParam))
        }
           

    },[])

    useEffect(()=>{
        loadCategories()
    },[location])

    return (
        <form className="md:w-full">
            <Page.Main className="w-full h-auto flex flex-row gap-1 items-end justify-start">     
                <div className="flex flex-row gap-2 w-full">
                    <Form.Select
                        label="Esporte"
                        onChange={e=>setCategory(parseInt(e.target.value))}
                        value={category}
                        className="h-[37px] w-[60%]" 
                        options={categoriesOptions}
                    />
                       
                    <Form.Input 
                        label="Distância"
                        className="h-[37px] w-[40%]" 
                        placeholder="..10km"
                        value={distance}
                        onChange={e=>changeDistance(e.target.value)}
                        type="number"
                    />

                </div> 
                        
                <div className='flex-row items-end flex gap-1'>
                    <Form.Button type="submit" onClick={handleSearch}><FaSearch/></Form.Button>
                </div>
            </Page.Main>
        </form>
    )
}