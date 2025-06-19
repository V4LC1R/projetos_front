import { Page } from "@components/__common/Page";  
import { ProfileGuest } from "@components/Area/ProfileGuest";
import { Schedule } from "@components/Area/Schedule";
import { FaArrowLeft } from "react-icons/fa";
import { FaMap, FaMapLocationDot } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { useParams } from "react-router";

export function AreaPage(){
    const { id } = useParams();

    
    const horariosDisponiveis = [
        "08:00",
        "09:00",
        "10:00",
        "11:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00"
    ];

    return(
        <Page.Body className="py-2">
            <Page.Header title="Area X"/>

            <Page.Main>
                <ProfileGuest/>
                
                <div className="w-full flex flex-row justify-start mb-2">
                    <span className="text-lg font-semibold">Horários</span>
                </div>

                <Page.ScrollY className="gap-[5px] h-70">
                    {/* Componentes Schedule existentes */}

                    {/* Horários exibidos ao cliente */}
                    {horariosDisponiveis.map((horario, index) => (
                        <div 
                            key={index}
                            className="p-3 bg-white rounded shadow-sm border border-gray-200"
                        >
                            <span className="text-base text-gray-800">Horário: {horario}</span>
                        </div>
                    ))}
                </Page.ScrollY>
            </Page.Main>
        </Page.Body>
    );
}
