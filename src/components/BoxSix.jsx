import React from 'react'
import { BiDotsHorizontalRounded} from 'react-icons/bi'
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Filler,Legend,} from 'chart.js';
import { Line } from 'react-chartjs-2'; ChartJS.register( CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend );
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
  export const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Dataset 2',
        data: [25, 20, 30, 22, 17, 29, 25, 20, 30, 22, 17, 29],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  

function BoxSix() {
  return (
    <>
        <div className='flex justify-between'>
          <div className='font-medium mx-4 my-4'>Popular Stocks</div>
          <div className="">
            <BiDotsHorizontalRounded className='box_six_icon m-4' /> </div>
        </div>
        <div className="mx-5 ">
          <div className="rounded-lg mx-4  bg-purple-200 ">
            <div className='flex justify-between'>
              <div></div>
              <div className=""><Line options={options} data={data} /></div>
            </div>
            <div className="mx-5">
            </div>
          </div>
          <div className='mx-4  '>
            <div className="relative sm:rounded-lg">
              <table className="w-full text-sm text-left text-gray-500">
                <tbody>
                  <tr className="border-b hover:bg-gray-50 ">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap">
                      Bajaj Finery
                      <p className='text-green-300'>10% Profit</p>
                    </th>

                    <td className="px-6 py-4 text-right">
                      <a href="#" className="font-medium text-gray-600  ">$1839.00</a>
                    </td>
                  </tr>
                  <tr className="bg-white border-b  hover:bg-gray-50 ">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 ">
                      TTML
                      <p className='text-red-500'>10% Loss</p>
                    </th>

                    <td className="px-6 py-4 text-right">
                      <a href="#" className="font-medium text-gray-600 ">$100.00</a>
                    </td>
                  </tr>
                  <tr className="bg-white border-b  hover:bg-gray-50 ">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 ">
                      reliance
                      <p className='text-green-300'>10% Profit</p>
                    </th>

                    <td className="px-6 py-4 text-right">
                      <a href="#" className="font-medium text-gray-600 ">$200.00</a>
                    </td>
                  </tr>
                  <tr className="bg-white border-b  hover:bg-gray-50 ">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 ">
                      TTML
                      <p className='text-red-500'>10% Loss</p>
                    </th>

                    <td className="px-6 py-4 text-right">
                      <a href="#" className="font-medium text-gray-600 ">$189.00</a>
                    </td>
                  </tr>
                  <tr className="bg-white  hover:bg-gray-50 ">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 ">
                      Stolon
                      <p className='text-red-500'>10% Loss</p>
                    </th>
                    <td className="px-6 py-4 text-right">
                      <a href="#" className="font-medium text-gray-600 ">$198.00</a>
                    </td>
                  </tr>
                </tbody>
                <div className='text-blue-600 font-bold mx-4 view_all_button'> View All</div>
              </table>
            </div>
          </div>
        </div>

    </>
  )
}

export default BoxSix
