import { useState } from "react";
import dayjs from 'dayjs'
import quarterOfYear from 'dayjs/plugin/quarterOfYear'
import Chart from 'react-apexcharts'
import { ApexOptions } from "apexcharts";

dayjs.extend(quarterOfYear)

interface SplineAreaChartProps extends ApexOptions {
    idChart?:string,
    categories:number[] | string[]
    dataChart?:ApexAxisChartSeries | ApexNonAxisChartSeries | undefined
}


export function SplineAreaChart({idChart,dataChart,categories,...props}:SplineAreaChartProps){
    const [state, setState] = useState({
      options: {
        ...props,
        responsive:[
            {
                breakpoint: 768 as number,
                options: {
                     chart: {
                        id: idChart ?? 'SplineAreacChart'+dayjs(),
                        height: 100,
                        width:150,
                        type: 'area' as const
                    }
                }
            }
        ],
        dataLabels: {
            enabled: true
        },
        stroke: {
            curve: "smooth" as "smooth"
        },
        xaxis: {
            
            categories
        }
      } as ApexOptions,
      
      series: dataChart
    });

    return(
        <Chart 
            options={state.options} 
            series={state.series} 
            type="area"
        />
    )
}