import React from 'react'
import { BiShoppingBag } from 'react-icons/bi'
import { BsArrowDownLeftCircle } from 'react-icons/bs'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend, } from 'chart.js';
import { Line } from 'react-chartjs-2'; ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);
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

function BoxTwo() {
    return (
        <>
            <div className='flex justify-between'>
                <div className="mx-5  my-3"><BiShoppingBag className="icon bg-blue-700 rounded-lg" /></div>
                <div className="mx-5 my-3">
                    <button type="button" class="text-white font-medium rounded-lg  px-5 py-2.5 mr-2 mb-2   ">Month</button>
                    <button type="button" class="text-white  bg-blue-400   font-medium rounded-lg px-5 py-2.5 mr-2 mb-2   ">Year</button>
                </div>
            </div>
            <div className="flex justify-between">
                <div className='flex '>
                    <div class="text-4xl font-bold text-white mx-3 ">$961</div>
                    <div><BsArrowDownLeftCircle className='icon ' /></div>
                </div>
                {/* <div className=''><Line options={options} data={data} /></div> */}
            </div>
            <div className='mx-4'>Total Order</div>
        </>
    )
}

export default BoxTwo
