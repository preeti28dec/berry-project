import React from 'react'
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, } from 'chart.js';

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
console.log(data.datasets, "sjfgks");


function BoxFive() {
  return (
    <>
      <div className='flex justify-between  px-5 py-4'>
        <div>
          <div className='text-gray-400'>Total Growth</div>
          <div className='font-bold text-black'>$2,324.00</div>
        </div>
        <div className="">

          <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="focus:ring-2 focus:ring-blue-500 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center  " type="button">
            Today<svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          {/* <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 " data-popper-placement="bottom" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(583px, 735px);">
            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Today</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">This Month</a>
              </li>
              <li>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">This Year</a>
              </li>
            </ul>
          </div> */}

          {/* <button type='button' className=''> Today</button> */}
        </div>
      </div>
      <Bar options={options} data={data} className="" />
    </>
  )
}

export default BoxFive
