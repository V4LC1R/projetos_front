import { Form } from "@components/__common/Form";
import { Page } from "@components/__common/Page";
import { useInteration } from "@context/InterationContext";
import { AreaFormRequest, Category } from "@services/Area";
import areaService from "@services/Area/area.service";
import { ScheduleFormRequest } from "@services/Schedule/schedule.types";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {  FaMapMarkerAlt, FaMinus, FaPlus } from "react-icons/fa";
import { useParams } from "react-router";

type Option = {
    label: string;
    value: string | number;
  };

export function ProfileAreaPage(){

    const {id} = useParams()
    
    //formulario
    const [formData, setFormData] = useState({
        name: "",
        rent: "0.00",
        address: {
            country: "",
            street: "",
            number_place: "",
            district: "",
            city: "",
            state: "",
            complement: ""
        }
    })


    const [newSchedules,setNewSchedules] = useState<ScheduleFormRequest[]>([])
    const [selectedCategories, setSelectedCategories] = useState<Option[]>([]);
    const [categories, setCategories] = useState<Category[]>([])
    const [areaLocation, setAreaLocation] = useState({
        latitude: 0,
        longitude: 0
    })
    
    const {locationMarked,markInMap,markInMapOn,markInMapOff} = useInteration()

    async function loadCategories() {
        const data = await areaService.categories();
        setCategories(() => data);
    }

    function handleAddSchedule() {
        const last = newSchedules[newSchedules.length - 1];
      
        const now = dayjs();
      
        const baseDate = last?.date ?? now.toISOString();
        const baseStart = last?.end_time
          ? dayjs(last.end_time)
          : now.startOf("hour").add(1, "hour"); // próximo horário cheio
      
        const newSchedule: ScheduleFormRequest = {
          date: dayjs(baseDate).toISOString(),
          start_time: baseStart.toISOString(),
          end_time: baseStart.add(1, "hour").toISOString(),
        };
      
        setNewSchedules((prev) => [...prev, newSchedule]);
      }

    function handleRemoveSchedule(index:number){
        setNewSchedules((prev)=>{
            const newArr = [...prev]
            newArr.splice(index, 1)
            return newArr
        })
    }

    function handleChangeSchedule(index:number,value:string){
        setNewSchedules((prev)=>{
            const newArr = [...prev]
            newArr[index].end_time = dayjs(value).toDate()
            return newArr
        })
    }

    function handleMarkLocation(){
        markInMapOn()
        toast.success("Marque a localização da área no mapa, depois clique novamente para confirmar.")
    }

    function handleFishMarkLocation(){
        markInMapOff()
        toast.success("Localização Marcada com sucesso!")
    }
   
    function handleSaveArea(){
        if(!areaLocation.latitude || !areaLocation.longitude){
            toast.error("Por favor, marque a localização da área no mapa.")
            return
        }

        if(newSchedules.length === 0){
            toast.error("Por favor, adicione pelo menos um horário para a área.")
            return
        }

        const areaData:AreaFormRequest = {
            name: formData.name, // Aqui você pode pegar o valor do input correspondente
            rent: formData.rent, // Aqui você pode pegar o valor do input correspondente
            address: {
                ...formData.address, // Aqui você pode pegar o valor do input correspondente
                latitude: areaLocation.latitude.toString(),
                longitude: areaLocation.longitude.toString(),
            },
            categories: selectedCategories.map(c => parseInt(String(c.value))),
            schedule: newSchedules,
        };

        areaService.create(areaData)
        
        toast.promise(
            areaService.create(areaData),
            {
                loading: "Cadastrando área...",
                success: () => {
                    toast.success("Área cadastrada com sucesso!");
                    return "Área cadastrada com sucesso!";
                },
                error: (error) => {
                    console.error(error);
                    return "Erro ao cadastrar área, tente novamente mais tarde!";
                }
            }
        )
    }

    useEffect(()=>{
        loadCategories();

        if(!id)
            return
       
        setNewSchedules([{
            date: dayjs().toISOString(),
            start_time: dayjs().startOf("hour").add(1, "hour").toISOString(),
            end_time: dayjs().startOf("hour").add(2, "hour").toISOString(),
        }])
    },[id])

    useEffect(()=>{
        if(!markInMap)
            return

        if(!locationMarked.latitude || !locationMarked.longitude)
            return

        setAreaLocation({
            latitude: locationMarked.latitude,
            longitude: locationMarked.longitude
        })
    }, [locationMarked])
       

    return (
        <Page.Body className={!markInMap?"py-2 h-[90svh] md:h-[90svh]":"py-2 h-[15svh] md:h-[15svh] md:w-[100px] bg-transparent"}>
            {
                markInMap && (
                    <div className="w-full h-full flex flex-col items-center justify-center">
                        <Form.Button onClick={()=>handleFishMarkLocation()} className="mb-2 w-[250px] md:w-[100px]">
                            <FaMapMarkerAlt className="mr-2"/> Marcar !
                         </Form.Button>
                    </div>
                )
            }
           {
            !markInMap && <Page.Header title={!id?"Cadastro de area":"Avani"} />
           }

           {
            !markInMap && (
                <Page.Main className="pb-2 h-[85svh]">
                
                    <Page.ScrollY className="gap-2 scrollbar-hidden">
                        <div className="flex flex-col w-full gap-5">
                            <div className="flex flex-row gap-1 relative p-2 bg-gray-50 rounded-[4px]">
                                <Form.Input
                                    value={formData.name}
                                    onChange={(e)=>setFormData((prev)=>({...prev, name: e.target.value}))}
                                    label="Nome da Area"
                                    className="w-[75%]"
                                    styleLabel="bg-gray-100"
                                />
                                <Form.Input
                                    value={formData.rent}
                                    onChange={(e)=>setFormData((prev)=>({...prev, rent: e.target.value}))}
                                    label="R$ / Hr"
                                    className="w-[25%]"
                                    styleLabel="bg-gray-100"
                                />
                            </div>

                            <div className="flex flex-col relative p-2 bg-gray-100 rounded-[4px]">
                                <div className="flex flex-row gap-1 w-full">
                                    <Form.Input

                                        label="Rua"
                                        value={formData.address.street}
                                        onChange={(e)=>setFormData((prev)=>({...prev, address: {...prev.address, street: e.target.value}}))}
                                       
                                        styleLabel="bg-gray-100"
                                    />
                                    <Form.Input
                                        label="Nº"
                                        className="w-[20%]"
                                        value={formData.address.number_place}
                                        onChange={(e)=>setFormData((prev)=>({...prev, address: {...prev.address, number_place: e.target.value}}))}
                                        styleLabel="bg-gray-100"
                                    />
                                </div>

                                <div className="flex flex-row gap-1 w-full">
                                    <Form.Input
                                        value={formData.address.district}
                                        onChange={(e)=>setFormData((prev)=>({...prev, address: {...prev.address, district: e.target.value}}))}
                                        label="Bairro"
                                        className="w-[56%]"
                                        styleLabel="bg-gray-100"
                                    />
                                        
                                    <Form.Input
                                        value={formData.address.city}
                                        onChange={(e)=>setFormData((prev)=>({...prev, address: {...prev.address, city: e.target.value}}))}
                                        label="Cidade"
                                        className="w-[33%]"
                                        styleLabel="bg-gray-100"
                                    />
                                    <Form.Input
                                        value={formData.address.state}
                                        onChange={(e)=>setFormData((prev)=>({...prev, address: {...prev.address, state: e.target.value}}))}
                                        label="Estado"
                                        className="w-[20%]"
                                        styleLabel="bg-gray-100"
                                    />
                                </div>
                               <div className="flex flex-row gap-1 w-full">
                                <Form.Input
                                        value={formData.address.country}
                                        onChange={(e)=>setFormData((prev)=>({...prev, address: {...prev.address, country: e.target.value}}))}
                                        type="text"
                                        label="Pais"
                                        className="w-[40%]"
                                        styleLabel="bg-gray-100"
                                        inputStyle="bg-red"
                                    />
                                <Form.Input
                                        value={formData.address.complement}
                                        onChange={(e)=>setFormData((prev)=>({...prev, address: {...prev.address, complement: e.target.value}}))}
                                        type="text"
                                        label="Complemento"
                                        styleLabel="bg-gray-100"
                                        inputStyle="bg-red"
                                />
                               </div>
                            </div>

                            <div className="flex flex-col gap-1 relative p-2 bg-gray-50 rounded-[4px]">
                                <label htmlFor="">Categoria</label>
                                <Form.MultiSelect
                                    placeholder="Selecione as categorias"
                                    onChange={setSelectedCategories}
                                    selected={selectedCategories}
                                    options={categories.map((c) => ({
                                        label: c.name,
                                        value: c.id,
                                    }))}
                                />
                            </div>

                            <div className="flex flex-col w-full p-2 bg-gray-100 rounded-[4px] justify-center items-left gap-3">
                                <div className="flex flex-row items-center gap-1 w-full">
                                    <span className="w-[70%]">Marque no mapa a localização da área</span>
                                    <Form.Button onClick={()=>handleMarkLocation()} className="w-[30%] mt-2">
                                        <FaMapMarkerAlt className=""/>
                                    </Form.Button>
                                </div>
                                <div className="flex flex-row w-full gap-1 mt-2">
                                    <Form.Input
                                        value={areaLocation.latitude}
                                        onChange={(e)=>setAreaLocation((prev)=>({...prev, latitude: parseFloat(e.target.value)}))}
                                        type="text"
                                        label="Latitude"
                                    />

                                    <Form.Input
                                        value={areaLocation.longitude}
                                        onChange={(e)=>setAreaLocation((prev)=>({...prev, longitude: parseFloat(e.target.value)}))}
                                        type="text"
                                        label="Longitude"
                                    />
                                </div>
                            </div>
                            
                        </div>
                        <div className="w-full flex flex-col justify-start gap-2">
                            <div className="flex flex-row items-center gap-2 w-full">
                                <span className="font-bold text-gray-400">Horarios</span>
                                <Form.Button onClick={()=>handleAddSchedule()} className="flex flex-row items-center gap-1">
                                    <FaPlus/>
                                </Form.Button>
                            </div>
                            <Page.ScrollY className="min-h-[32svh] max-h-[32svh] bg-gray-50" areaScrollClass="gap-4">
                                {
                                    newSchedules.map((s,i)=>(
                                        <div key={i} className="flex flex-row gap-1 items-center p-1 border-he-green-300 border-[0.5px] rounded-[4px] justify-between">
                                            <Form.Input
                                                type="date"
                                                className="w-[35%]"
                                                value={dayjs(s.date).format("YYYY-MM-DD")}
                                                onChange={(e)=>handleChangeSchedule(i, e.target.value)}
                                            />
                                            <Form.Input
                                                type="time"
                                                className="w-[25%]"
                                                value={dayjs(s.start_time).format("HH:mm")}
                                                onChange={(e)=>handleChangeSchedule(i, e.target.value)}
                                            />
                                            <Form.Input
                                                type="time"
                                                className="w-[25%]"
                                                value={dayjs(s.end_time).format("HH:mm")}
                                                onChange={(e)=>handleChangeSchedule(i, e.target.value)}
                                            />

                                        <Form.Button onClick={()=>handleRemoveSchedule(i)} className="flex flex-row items-center gap-1">
                                            <FaMinus />
                                        </Form.Button>
                                        
                                        </div>
                                    ))
                                }
                            </Page.ScrollY>
                        </div>
                    </Page.ScrollY>
                    <Form.Button onClick={()=>handleSaveArea()} className="w-full mt-2">
                        Cadastrar Area
                    </Form.Button>
                </Page.Main>
            )
           }
        </Page.Body>
    )
}