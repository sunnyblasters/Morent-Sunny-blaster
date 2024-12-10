import React from 'react'
import Image from 'next/image'
import { CiSearch } from "react-icons/ci";
import { Settings2 } from 'lucide-react';

function MobileNavbar() {
  return (
    <main className='w-full flex-col flex sm:hidden justify-center items-center bg-white'>

          <div className='w-[90%] flex justify-center items-center'>
              <div className='flex w-full justify-between px-4  py-6 items-center'>
                  <div className="logo">
                      <h3 className='text-[#3563E9] text-[32px] font-bold'>MORENT</h3>
                  </div>
                  <div className=' flex justify-center items-center'>
                      <Image src={'/navbar.png'} alt='' width={44} height={44} className='rounded-full'></Image>
                  </div>
              </div>
          </div>
          <div className='w-[80%] flex justify-center items-center'>
              <div className='flex w-full justify-center items-center gap-4'>
                  <div className='flex-grow flex justify-center relative items-center border-[#C3D4E966] border-[2px] rounded-lg'><CiSearch className='absolute text-[#596780] text-2xl left-[10px] ' /><input type="search" name="searchBox" placeholder='Search Here' id="" className='w-full text-[14px] px-8 py-2 rounded-full ] ' /></div>
                  <div className='border-[#C3D4E966] border-[2px] rounded-lg px-5 py-2'><Settings2 className='text-[#596780] ' /></div>
              </div>
          </div>

    </main>
  )
}

export default MobileNavbar