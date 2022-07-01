import React from 'react'
import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend,} from 'chart.js';

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
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [25, 20, 30, 22, 17, 29, 25, 20, 30, 22, 17, 29],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: [25, 20, 30, 22, 17, 29, 25, 20, 30, 22, 17, 29],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  console.log(data.datasets,"sjfgks");
  

function BoxFive() {
  return (
    <>
         <div className='flex justify-between font-medium px-5 py-4'>
          <div>
            <div className='text-gray-400'>Total Growth</div>
            <div className='font-bold text-black'>$2,324.00</div>
          </div>
          <div className="">
            <button type='button' className=''> Today</button>
          </div>
        </div>
        <Bar options={options} data={data} />
    </>
  )
}

export default BoxFive
