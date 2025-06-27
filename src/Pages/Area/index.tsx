import  { use, useEffect, useState } from "react";
import { Page } from "@components/__common/Page";
import { useParams } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import { Schedule } from "@services/Schedule/schedule.types";
import { Area } from "@services/Area";
import { times } from "@services/Format/Date";
import areaService from "@services/Area/area.service";
import toast from "react-hot-toast";
import { twMerge } from "tailwind-merge";

type SolicitationProps = {
  areaName: string;
  userName: string;
  date: string;
  status: "Pendente" | "Aprovado" | "Recusado";
  period: string;
};

function SolicitationCard({
  areaName,
  userName,
  date,
  status,
  period,
}: SolicitationProps) {
  return (
    <div className="p-4 border rounded-xl shadow-md bg-white w-full max-w-lg mx-auto mb-4">
      <h2 className="text-xl font-bold text-green-700">{areaName}</h2>
      <p className="text-base text-gray-700">Solicitante: {userName}</p>
      <p className="text-base text-gray-700">Data da Solicitação: {date}</p>
      <p className="text-base text-gray-700">Período: {period}</p>
      <p
        className={`text-base font-semibold ${
          status === "Aprovado"
            ? "text-green-600"
            : status === "Recusado"
            ? "text-red-600"
            : "text-yellow-600"
        }`}
      >
        Status: {status}
      </p>
    </div>
  );
}


function calcularHorarioFinal(horarioInicial: string): string {
  const [hora, minuto] = horarioInicial.split(":").map(Number);
  const totalMinutos = hora * 60 + minuto + 100; // 1h40min = 100 minutos
  const horaFinal = Math.floor(totalMinutos / 60);
  const minutoFinal = totalMinutos % 60;

  const formatado = (num: number) => String(num).padStart(2, "0");
  return `${formatado(horaFinal)}:${formatado(minutoFinal)}`;
}

export function AreaPage() {
    const { id } = useParams();
    const [selectedHorario, setSelectedHorario] = useState<string | null>(null);

    const [area,setArea] = useState<Area>({} as Area);

    const [horariosDisponiveis,setHorariosDisponiveis] = useState<Schedule[]>([])

    const [scheduleIds, setScheduleIds] = useState<number[] > ([])

    const solicitationInfo = {
        areaName: "Área X",
        userName: "José da Silva Moura",
        date: "2025-06-25",
        status: "Reservado",
        period: "10:00 - 12:00",
    };

    function selectItem(item:number){

        const updateId = [...scheduleIds];
        const indexProduct = updateId.findIndex(idItem=>idItem === item);
        
        if(indexProduct>=0){
            updateId.splice(indexProduct,1);
        }else{
            updateId.push(item)
        }

        setScheduleIds(()=>updateId);

        console.log("ID selecionado:", updateId);

    }

    async function fetchArea() {

        if (!id) 
            return toast.error("ID da área não fornecido.");

        try {
            const response = await areaService.show(parseInt(id));
            setArea(response);
            setHorariosDisponiveis(response.schedule);
        } catch (error) {
            console.error("Erro ao buscar a área:", error);
        }
    }

    const styleVariant = {
        default: "text-gray-900 bg-white hover:bg-gray-100",
        selected: "bg-gray-200 text-white hover:bg-gray-300",
        disabled: "bg-gray-200 text-gray-500 cursor-not-allowed",
    };
    


    useEffect(() => {
        fetchArea();
    },[])

    return (
        <Page.Body className="py-2">
            <Page.Header title="Área X" />

            <Page.Main>
                {false? (
                <div className="p-4 border rounded-xl shadow-md bg-white w-full max-w-lg mx-auto mt-4 overflow-auto max-h-[500px]">
                    <button
                    onClick={() => setSelectedHorario(null)}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 mb-4"
                    >
                    <FaArrowLeft />
                    Voltar
                    </button>

                    <h3 className="text-xl font-bold text-green-700 mb-4">
                    Formulário de Reserva
                    </h3>

                    <form className="space-y-5">
                    <div>
                        <label className="block text-base font-medium">Área</label>
                        <input
                        type="text"
                        value="Área X"
                        readOnly
                        className="w-full mt-1 p-3 border rounded bg-gray-100 text-gray-900"
                        />
                    </div>

                    <div>
                        <label className="block text-base font-medium">Nome do Usuário</label>
                        <input
                        type="text"
                        placeholder="Digite o nome"
                        className="w-full mt-1 p-3 border rounded text-gray-900"
                        />
                    </div>

                    <div>
                        <label className="block text-base font-medium">Data</label>
                        <input
                        type="date"
                        defaultValue="2025-06-25"
                        className="w-full mt-1 p-3 border rounded text-gray-900"
                        />
                    </div>

                    <div>
                        <label className="block text-base font-medium">Período</label>
                        <input
                        type="text"
                        value={`${selectedHorario} - ${calcularHorarioFinal(selectedHorario)}`}
                        readOnly
                        className="w-full mt-1 p-3 border rounded bg-gray-100 text-gray-900"
                        />
                    </div>

                    <div>
                        <label className="block text-base font-medium">Status</label>
                        <input
                        type="text"
                        value="Pendente"
                        readOnly
                        className="w-full mt-1 p-3 border rounded bg-yellow-100 text-yellow-800 font-semibold"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition"
                    >
                        Confirmar Reserva
                    </button>
                    </form>
                </div>
                ) : (
                <>
                    <div className="w-full flex flex-row justify-start mb-2">
                    <span className="text-lg font-semibold">Horários</span>
                    </div>

                    <Page.ScrollY className="gap-[10px] h-72">
                    {area.schedule.map((sc, index) => (
                        <div
                            key={index}
                            className={twMerge("p-4 bg-white transition-all rounded-[4px]  shadow-sm border border-gray-200 flex justify-between items-center",
                                scheduleIds.includes(sc.id) ? styleVariant.selected : styleVariant.default,
                            )}
                        >
                            <div className="flex flex-col text-base text-gray-800">
                                <span>Início: {times(sc.start_time)}</span>
                                <span className="text-sm text-gray-500">
                                Fim: {times(sc.start_time)}
                                </span>
                            </div>
                            <button
                                onClick={() => selectItem(sc.id)}
                                className="px-4 py-2 bg-green-600 cursor-pointer text-white rounded-lg hover:bg-green-700 transition duration-300"
                            >
                                Reservar
                            </button>
                        </div>
                    ))}
                    </Page.ScrollY>
                </>
                )}
            </Page.Main>
        </Page.Body>
    );
}
