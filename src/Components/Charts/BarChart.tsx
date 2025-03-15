import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};


export function BarChart({lable,value}:{lable:string[],value:number[]}) {

  const data = {
    labels:lable,
    datasets: [
      {
        label: '',
        data: value,
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ],
  };

  console.log(data)
  
  return <Bar 
    options={options} 
    data={{
      labels:lable,
      datasets: [
        {
          label: '',
          data: value,
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }
      ],
    }} 
  />;
}
