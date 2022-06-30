import React from 'react'
import { FaRaspberryPi } from 'react-icons/fa'
import { BiMenu } from 'react-icons/bi'
import { IoIosSearch, IoIosNotificationsOutline } from 'react-icons/io'
import { BsSliders } from 'react-icons/bs'
import { AiOutlineSetting } from 'react-icons/ai'
function Header() {
    return (
        <div className='header mx-5 my-5'>
            <div className="flex justify-between">
                <div className='flex '>
                    <FaRaspberryPi className="mr-3 mt-3 h-6 sm:h-10 icon" />
                    <span class="self-center text-xl font-semibold whitespace-nowrap ">BERRY</span>
                </div>
                <div className='mt-4'> <BiMenu className='icon mr-4' /> </div>
            </div>


            <div class="relative w-full">
                <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <div className='mb-5 mr-2'>
                        <IoIosSearch className=' ' />
                    </div>
                </div>
                <input type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-full pl-10 p-2.5  " placeholder="Search..." required />
                <button type="button" class="flex absolute inset-y-0 right-0 items-center pr-3">
                    <div className='mb-5'>
                        <BsSliders className='' />
                    </div>
                </button>
            </div>


            <div></div>
            <div className='notification-icon'><IoIosNotificationsOutline className='icon' /></div>

            <button type='button' class="flex justify-between border border-gray-400 rounded-full ">
                <img class="w-10 h-10 rounded-full mx-4 mt-2" src="https://static.remove.bg/remove-bg-web/ea4eaf12fdb825d09a927ec03bfcfc723af95931/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg" alt="Rounded avatar" />
                <div className='setting-icon   mx-4 my-4'><AiOutlineSetting className='icon' /></div>
            </button>


        </div>
    )

}

export default Header
