import { InputCustom } from "@components/Input";
import { BarChart } from "@components/Charts/BarChart";
import { SplineAreaChart } from "@components/Charts/SplineAreaCharta";
import { PieChart } from "@components/Charts/PieChart";
import { DashedChart } from "@components/Charts/DashedChart";
import api from "@services/api";
import { ReportData } from "../../@types/App";
import { useEffect, useState } from "react";

type Ranking ={
    lables:string[]
    values:number[]

}

export function AdminDashboard()
{

    const [ranking,setRanking] = useState<Ranking>({
        lables:[],
        values:[]
    } as Ranking)

    const [origin,setOringin] = useState<Ranking>({
        lables:[],
        values:[]
    } as Ranking)

    const [report,setReport] = useState<ReportData>({} as ReportData)

    async function getData(){
        try {
            const {data} :{data:ReportData} = await api.get('/post/dash')
           
            setReport(e=>data)

        } catch (error) {
            console.log(error)
        }
    }

    function themesRanking(){

       let lables:string[] = []
       let values:number[] = []

       if(!report.ranking)
            return

        report?.ranking.map(val=>{
            
            lables.push(val.tema)
            values = [...values,val.total_leituras]
        })

        const processData= {
            lables,
            values
        }

        setRanking(e=>processData)


        return processData
    }

    function originRead(){
        let lables:string[] = []
        let values:number[] = []

       

         if(!report.orignRead)
            return

         report?.orignRead.map(val=>{
            
            lables.push(val.midia)
            values = [...values,val.total_leituras]
        })

        const processData= {
            lables,
            values
        }

        setOringin(e=>processData)

        return processData
    }

    useEffect(()=>{
        getData()
        
    },[])


    useEffect(()=>{
        themesRanking()
        originRead()
    },[report])

    return (
        <>
            <header className="text-left flex flex-row w-full justify-between items-center p-2">
                <h3 className="font-semibold">Meta Analise</h3>
                <InputCustom
                    className="border-[1px] w-50 border-gray-300 p-1"
                    type="date"
                />
            </header>

            <div className="overflow-y-auto ">
                <div className="flex flex-wrap flex-col gap-2">
                    <div className="w-212 gap-1 grid grid-cols-2">
                        <div className="shadow-sm">
                            <BarChart
                                lable={ranking.lables}
                                value={ranking.values}
                            />
                        </div>
                        <div className="shadow-sm">
                                <SplineAreaChart
                            title={{
                                text:"Fluxo de leitura do Periodo por tema"
                            }}
                            chart={{
                                height:100,
                                width:300,
                                zoom:{
                                    enabled:false
                                }
                            }}
                            dataChart={[
                                {
                                    name: 'series1',
                                    data: [31, 40, 28]
                                }, 
                                {
                                    name: 'series2',
                                    data: [11, 32, 45]
                                }, 
                                {
                                    name: 'series3',
                                    data: [11, 30, 15]
                                }
                            ]}
                            categories={["Rosca","Supino", "Elevacao"]}
                        />
                            
                        </div>
                    </div>

                    <div className="w-212 gap-1 grid grid-cols-2">

                        <div className="shadow">
                            <PieChart
                                lable={origin.lables}
                                value={origin.values}
                            />
                        </div>
                    </div>

                    <div className="w-212" >
                        <DashedChart/>
                    </div>
                
                </div>
            </div>
        </>
    )
}