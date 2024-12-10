import React from 'react'
import { ComboboxDemo } from './button'
import DatePickerDemo from './date'
import { LuArrowDownUp } from "react-icons/lu";




function Service() {
  return (
      <main className='w-full flex justify-center items-center'>
          <div className='w-full sm:w-[90%] flex xl:flex-row flex-col justify-center gap-4 items-center'>
              <div className='sm:w-[582px] w-full bg-white rounded-[5px] gap-4 py-2 px-1 sm:px-3 flex flex-col justify-center items-center'>

                  <div className='flex w-full justify-start p-2 text-left items-center gap-2'>
                      <input type="radio" name="" id="" checked />
                      <h3 className='text-base'>Pick-Up</h3>
                  </div>

                  <div className='w-full flex lg:gap-2 pb-3 px-1 justify-evenly items-center'>
                      <div className='flex flex-col gap-2 justify-center items-start'>
                          <h3 className='text-base font-bold'>
                              Location
                          </h3>

                          {/* <ComboboxDemo /> */}
                          <select name="hello" id="" aria-placeholder='hello' className='py-2 px-2 sm:px-4 rounded-[5px] text-[12px] font-bold outline-none' >
                            <option value="karachi">Karachi</option>
                            <option value="islamabad">Islamabad</option>
                            <option value="lahore">Lahore</option>
                            <option value="multan">Multan</option>
                            <option value="peshawar">Peshawar</option>
                          </select>
                          
                      </div>

                      <div className='flex flex-col gap-2 justify-center items-start'>
                          <h3 className='text-base font-bold'>
                              Date
                          </h3>

                          {/* <DatePickerDemo /> */}
                          <input type="date" name="Select Date" id="" placeholder='Select Date'className='w-[100px] sm:w-[140px] py-2 px-1 sm:px-4 rounded-[5px] text-[12px] font-bold'/>
                      </div>
                      <div className='flex flex-col gap-2 justify-center items-start'>
                          <h3 className='text-base font-bold'>
                              Time
                          </h3>

                          {/* <DatePickerDemo /> */}
                          <input type="time" name="" id="" className='py-2 w-[100px] sm:w-[140px] px-2 sm:px-4 rounded-[5px] text-[12px] font-bold'/>
                          
                      </div>
                  </div>

              </div>

              <div className='w-[60px] bg-[#3563E9] flex justify-center items-center text-[22px] text-white rounded-[5px] h-[60px]'>
                     <LuArrowDownUp />
              </div>    

              <div className='sm:w-[582px] w-full bg-white rounded-[5px] gap-4 py-2 px-1 sm:px-3 flex flex-col justify-center items-center'>

                  <div className='flex w-full justify-start p-2 text-left items-center gap-2'>
                      <input type="radio" name="" id="" checked />
                      <h3 className='text-base'>Drop</h3>
                  </div>

                  <div className='w-full flex lg:gap-2 pb-3 px-1 justify-evenly items-center'>
                      <div className='flex flex-col gap-2 justify-center items-start'>
                          <h3 className='text-base font-bold'>
                              Location
                          </h3>

                          {/* <ComboboxDemo /> */}
                          <select name="" id="" className='py-2 px-2 sm:px-4 rounded-[5px] text-[12px] font-bold outline-none' >
                            <option value="karachi">Karachi</option>
                            <option value="islamabad">Islamabad</option>
                            <option value="lahore">Lahore</option>
                            <option value="multan">Multan</option>
                            <option value="peshawar">Peshawar</option>
                          </select>
                          
                      </div>

                      <div className='flex flex-col gap-2 justify-center items-start'>
                          <h3 className='text-base font-bold'>
                              Date
                          </h3>

                          {/* <DatePickerDemo /> */}
                          <input type="date" name="Select Date" id="" placeholder='Select Date'className='w-[100px] sm:w-[140px] py-2 px-1 sm:px-4 rounded-[5px] text-[12px] font-bold'/>
                      </div>
                      <div className='flex flex-col gap-2 justify-center items-start'>
                          <h3 className='text-base font-bold'>
                              Time
                          </h3>

                          {/* <DatePickerDemo /> */}
                          <input type="time" name="" id="" className='w-[100px] sm:w-[140px] py-2 px-2 sm:px-4 rounded-[5px] text-[12px] font-bold'/>
                          
                      </div>
                  </div>

              </div>
          </div>
      </main>
  )
}

export default Service