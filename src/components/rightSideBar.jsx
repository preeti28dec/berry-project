import React from 'react'
import { BiDotsHorizontalRounded, BiShoppingBag } from 'react-icons/bi'
import { BsArrowUpRightCircle, BsArrowDownLeftCircle,BsShopWindow } from 'react-icons/bs'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'
function RightSideBar() {
  return (
    <div className='right-container mx-4'>
      <div className=''>
        <div className='flex justify-between'>
          <div className="card rounded-lg mx-4 my-4 bg-violet-700 ">
            <div className='flex justify-between'>
              <div className="mx-10 mt-6 "><MdOutlineAccountBalanceWallet className='icon' /></div>
              <div className="mx-10 mt-6"> <BiDotsHorizontalRounded className='icon' /> </div>
            </div>
            <div className="mx-5 my-10">
              <div className='flex'>
                <div class="text-4xl font-bold text-white">$500.00 </div>
                <div><BsArrowUpRightCircle className='icon ml-2' /></div>
              </div>
              <div className=''>Total Earning</div>
            </div>
          </div>


          <div className="card rounded-lg mx-4 my-4 bg-blue-500 ">
            <div className='flex justify-between'>
              <div className="mx-10 mt-6 "><BiShoppingBag className="icon" /></div>
              <div className="mx-10 mt-6">
                <button type="button" class="text-white font-medium rounded-lg  px-5 py-2.5 mr-2 mb-2   ">Month</button>
                <button type="button" class="text-white  bg-blue-500   font-medium rounded-lg px-5 py-2.5 mr-2 mb-2   ">Year</button>
              </div>
            </div>
            <div className="mx-5 mt-6">
              <div className='flex'>
                <div class="text-4xl font-bold text-white ">$961</div>
                <div><BsArrowDownLeftCircle className='icon ml-2' /></div>
              </div>
              <div className=''>Total Order</div>
            </div>
          </div>
        </div>

        <div className="rounded-lg mx-4 my-4 bg-white ">
          <div className='flex justify-between font-medium px-5 py-4'>
            <div>
              <div>Total Growth</div>
              <div>$2,324.00</div>
            </div>
            <div className="">
              <button type='button' className=''> Today</button>
            </div>
          </div>
        </div>
      </div>

      <div className='right-container-rightside mt-4  gap-16'>
        <div className='grid gap-8'>
          <div className="rounded-lg bg-blue-500 ">
            <div className='flex '>
              <div className="mx-4 my-4"><BsShopWindow className='icon' /></div>
              <div className="mx-4 my-2">
                <div class="">$203k </div>
                <div className=''>Total Income</div>
              </div>
            </div>
          </div>

          <div className='grid gap-8'>
            <div className="rounded-lg  bg-white ">
              <div className='flex'>
                <div className="mx-4 my-4"><BsShopWindow  className='icon' /></div>
                <div className="mx-4 my-2">
                  <div class=" ">$203K</div>
                  <div className=''>Total Income</div>
                </div>
              </div>
            </div>

          </div>
        </div>

      <div className=''>
        <div className=" rounded-lg  bg-blue-700 ">
          <div className='flex justify-between'>
          <div className='font-medium mx-4 my-4'>Popular Stocks</div>
            <div className="mx-10 my-6"> <BiDotsHorizontalRounded className='icon'/> </div>
          </div>
          <div className="mx-5 my-10">
           
          </div>
        </div>
      </div>
</div>

    </div>
  )
}

export default RightSideBar
