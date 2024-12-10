import React from 'react'
import { CiSearch } from "react-icons/ci";
import { Settings2 } from 'lucide-react';
import './navbar.css'
import { FaHeart } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import Image from 'next/image';




function DesktopNavbar() {
  return (
    <main className='w-full hidden h-[124px] sm:flex justify-center items-center bg-white'>

        <div className='flex w-[90%] gap-7 justify-between items-center'>
              <div className='flex w-[60%]   justify-between items-center'>
                  <div className="logo w-[40%]">
                      <h3 className='text-[#3563E9] text-[32px] font-bold'>MORENT</h3>
                  </div>
                  <div className='w-[60%] flex justify-center relative items-center border-[#C3D4E966] border-[2px] rounded-lg'>
                      <CiSearch className='absolute text-[#596780] text-2xl left-[10px] ' /><input type="search" name="searchBox" id="" placeholder='Search Here' className='w-full px-9  py-2 rounded-lg ] ' /><Settings2 className='text-[#596780] absolute right-[10px]' />
                  </div>
              </div>

              <div className='w-[40%] flex justify-end gap-3 items-center'>
                    <div className='w-[44px] h-11 rounded-full border-[#C3D4E966] border-[2px] flex justify-center items-center'><FaHeart width={24} height={24}/></div>
                    <div className='w-[44px] h-11 rounded-full border-[#C3D4E966] border-[2px] flex justify-center items-center'><FaBell width={24} height={24}/></div>
                    <div className='w-[44px] h-11 rounded-full border-[#C3D4E966] border-[2px] flex justify-center items-center'><IoIosSettings width={24} height={24}/></div>
                    <Image src={'/navbar.png'} alt='' width={44} height={44} className='rounded-full'></Image>
              </div>
        </div>
        
    </main>
  )
}

export default DesktopNavbar