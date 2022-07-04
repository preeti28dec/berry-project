import React from 'react'
import { BiDotsHorizontalRounded, BiShoppingBag } from 'react-icons/bi'
import { BsArrowUpRightCircle, BsArrowDownLeftCircle, BsShopWindow } from 'react-icons/bs'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'
import BoxSix from './BoxSix';
import BoxFive from './BoxFive';
import BoxTwo from './BoxTwo';



function RightSideBar() {
  return (
    <div className='right_section rounded-xl'>
      <div className='box_one rounded-xl'>
        <div className='mx-4 my-3'>
          <div className='flex justify-between my-4'>
            <div className=""><MdOutlineAccountBalanceWallet className='icon bg-violet-700 rounded-lg' /></div>
            <div className=""> <BiDotsHorizontalRounded className='icon_dots ' /> </div>
          </div>
          <div className='flex'>
            <div class="text-4xl font-bold text-white ">$500.00 </div>
            <div><BsArrowUpRightCircle className='icon ml-2 ' /></div>
          </div>
          <div className=''>Total Earning</div>
        </div>
      </div>

      <div className='box_two bg-blue-400 rounded-xl'>
        <BoxTwo />
      </div>

      <div className='box_three  rounded-xl'>
        <div className='flex m-4 '>
          <div className=""><BsShopWindow className='icon bg-blue-700 rounded-lg' /></div>
          <div className="mx-5 ">
            <div class="font-bold text-white">$203k </div>
            <div className='text-white'>Total Income</div>
          </div>
        </div>
      </div>

      <div className='box_four bg-white rounded-xl'>
      <div className='flex m-4'>
          <div className=""><BsShopWindow className='box_icon bg-yellow-100 rounded-lg' /></div>
          <div className="mx-5">
            <div class="font-bold text-black">$203k </div>
            <div className='text-gray-500 '>Total Income</div>
          </div>
        </div>
      </div>

      <div className='box_five rounded-xl'>
       <BoxFive/>
      </div>

      <div className='box_six bg-slate-50 rounded-xl'>
        <BoxSix/>
      </div>

    </div>
  )
}

export default RightSideBar
