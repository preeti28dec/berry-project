import React from 'react'
import { BsQuestionCircle, BsShopWindow } from 'react-icons/bs'
import { BiCompass } from 'react-icons/bi'
import { RiKey2Line } from 'react-icons/ri'
import { IoColorPaletteOutline } from 'react-icons/io5'
import { TbShadow, TbTypography } from 'react-icons/tb'
import { SiGooglephotos } from 'react-icons/si'
import { FiChrome } from 'react-icons/fi'
function LeftSideBar() {
  return (
    <div className='mx-4 my-4 font-medium'>
      <div className="" aria-label="Sidebar">
        <div className="overflow-y-auto py-4 px-3 rounded ">
          <span>Dashboard</span>
          <a href="#" className="left-sidebar-icon-text flex items-center p-2 text-base font-normal text-gray-500 rounded-lg  hover:bg-purple-100">
            <span className='text_icon'><BiCompass className='leftSidebar-icon text-gray-500 ' /></span>
            <span className="ml-3 text_icon_text ">Dashboard</span>
          </a>
          <ul className="pt-4 mt-4 space-y-2 border-t border-gray-300">
            <span className='text_icon_text'>Pages</span>
            <p className='text-sm text-gray-500'>Pages Caption</p>

            <a href="#" className=" left-sidebar-icon-text flex items-center p-2 text-base font-normal  text-gray-500  rounded-lg   hover:bg-purple-100">
              <span className='text_icon'><RiKey2Line className='leftSidebar-icon text-gray-500' /></span>
              <button className="ml-3 text_icon_text">Authentication</button>
            </a>
            <ul className="pt-4 mt-4 space-y-2 border-t border-gray-300">
              <li>
                <a href="#" className=" left-sidebar-icon-text flex items-center p-2 text-base font-normal  text-gray-500  rounded-lg  transition duration-75 hover:bg-purple-100  group">
                  <span className='text_icon'><TbTypography className="leftSidebar-icon text-gray-500" /></span>
                  <span className="ml-4 text_icon_text">Typrography</span>
                </a>
              </li>
            </ul>
          </ul>
          <ul className="space-y-2">
            <li>
              <a href="#" className=" left-sidebar-icon-text flex items-center p-2 text-base font-normal  rounded-lg  text-gray-500 hover:bg-purple-100">
                <span className='text_icon'><IoColorPaletteOutline className='leftSidebar-icon text-gray-500' /></span>
                <span className="flex-1 ml-3 text_icon_text">Color</span>
              </a>
            </li>
            <li>
              <a href="#" className=" left-sidebar-icon-text flex items-center p-2 text-base font-normal  rounded-lg  text-gray-500  hover:bg-purple-100">
                <span className='text_icon'><TbShadow className="leftSidebar-icon text-gray-500" /></span>
                <span className="flex-1 ml-3 text_icon_text">Shodow</span>
              </a>
            </li>
            <li>
              <a href="#" className=" left-sidebar-icon-text flex items-center p-2 text-base font-normal  rounded-lg  text-gray-500  hover:bg-purple-100">
                <span className='text_icon'><SiGooglephotos className='leftSidebar-icon text-gray-500' /></span>
                <span className="flex-1 ml-3 text_icon_text ">Icon</span>
              </a>
            </li>

          </ul>
          <ul className="pt-4 mt-4 space-y-2 border-t border-gray-300">
            <li>
              <a href="#" className=" left-sidebar-icon-text flex items-center p-2 text-base font-normal  text-gray-500 rounded-lg  hover:bg-purple-100  group">
                <span className='text_icon'><FiChrome className='leftSidebar-icon text-gray-500' /></span>
                <span className="ml-4 text_icon_text">Sample Page</span>
              </a>
            </li>
            <li>
              <a href="#" className=" left-sidebar-icon-text flex items-center p-2 text-base font-normal   text-gray-500   rounded-lg  hover:bg-purple-100  group">
                <span className='text_icon'><BsQuestionCircle className="leftSidebar-icon text-gray-500" />
                </span> <span className="ml-3 text_icon_text">Documentation</span>
              </a>
            </li>
          </ul>
        </div>
        <ul className="pt-4 mt-4 space-y-2 border-t border-gray-300">
          <div>
            <div className="rounded-lg bg-blue-200 ">
              <div className='flex items-center'>
                <div className="mx-4 "><BsShopWindow className='shop_icon bg-white rounded-lg' /></div>
                <div className="mx-4 my-4">
                  <div className='text-blue-600'>Get Extra Space</div>
                  <div className='text-gray-500 text-sm'>28/23 GB</div>
                </div>
              </div>
              <div className='flex justify-between mx-4'>
                <div className='text-blue-600'>Progress</div>
                <div className='text-gray-700 '>80%</div>
              </div>
              <div className='mx-4'><input type="range" value={80} className='w-full'/></div>
            </div>
          </div>
        </ul>
      </div>

    </div>
  )
}

export default LeftSideBar
