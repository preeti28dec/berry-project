import React from 'react'
import {BsQuestionCircle} from 'react-icons/bs'
import { BiCompass } from 'react-icons/bi'
import {RiKey2Line} from 'react-icons/ri'
import {IoColorPaletteOutline} from 'react-icons/io5'
import {TbShadow,TbTypography} from 'react-icons/tb'
import {SiGooglephotos} from 'react-icons/si'
import {FiChrome} from 'react-icons/fi'
function LeftSideBar() {
  return (
    <div className='mx-4 my-4 font-medium'>
      <div className="" aria-label="Sidebar">
        <div className="overflow-y-auto py-4 px-3 rounded ">
          <span>Dashboard</span>
          <a href="#" className="flex items-center p-2 text-base font-normal  rounded-lg  hover:bg-purple-100">
            <span><BiCompass className='icon '/></span>
            <span className="ml-3">Dashboard</span>
          </a>
          <ul className="pt-4 mt-4 space-y-2 border-t border-gray-300">
          <span className=''>Pages</span>
          <p className='text-sm'>Pages Caption</p>
          <a href="#" className="flex items-center p-2 text-base font-normal  rounded-lg  hover:bg-purple-100">
            <span><RiKey2Line className='icon'/></span>
            <button className="ml-3">Authentication</button>
          </a>
          <ul className="pt-4 mt-4 space-y-2 border-t border-gray-300">
            <li>
              <a href="#" className="flex items-center p-2 text-base font-normal  rounded-lg transition duration-75 hover:bg-purple-100  group">
              <span><TbTypography className="icon"/></span>
              <span className="ml-4">Typrography</span>
              </a>
            </li>
            </ul>
          </ul>
          <ul className="space-y-2">
            <li>
              <a href="#" className="flex items-center p-2 text-base font-normal  rounded-lg  hover:bg-purple-100">
              <span><IoColorPaletteOutline className='icon'/></span>
              <span className="flex-1 ml-3 whitespace-nowrap">Color</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-base font-normal  rounded-lg  hover:bg-purple-100">
              <span><TbShadow className="icon"/></span>
              <span className="flex-1 ml-3 whitespace-nowrap">Shodow</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-base font-normal  rounded-lg  hover:bg-purple-100">
              <span><SiGooglephotos className='icon'/></span>
              <span className="flex-1 ml-3 whitespace-nowrap">Icon</span>
              </a>
            </li>
            
          </ul>
          <ul className="pt-4 mt-4 space-y-2 border-t border-gray-300">
            <li>
              <a href="#" className="flex items-center p-2 text-base font-normal  rounded-lg transition duration-75 hover:bg-purple-100  group">
              <span><FiChrome className='icon'/></span><span className="ml-4">Sample Page</span>
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 text-base font-normal  rounded-lg transition duration-75 hover:bg-purple-100  group">
              <span><BsQuestionCircle className="icon" /></span> <span className="ml-3">Documentation</span>
              </a>
            </li>
          </ul>
        </div>
        <ul className="pt-4 mt-4 space-y-2 border-t border-gray-300">
           <div>
           <div className="rounded-lg mx-4 my-4 bg-blue-700 ">
            <div className='flex justify-between'>
              {/* <div className="mx-10 my-6 "><MdOutlineAccountBalanceWallet /></div>
              <div className="mx-10 my-6"> <BiDotsHorizontalRounded /> </div> */}
            </div>
            <div className="mx-5 my-10">
              <div class="text-4xl ">$500.00</div>
              <div className=''>Total Earning</div>
            </div>
          </div>
           </div>
          </ul>
      </div>

    </div>
  )
}

export default LeftSideBar
