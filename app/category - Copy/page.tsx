'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import { BsFillFuelPumpFill } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";
import { TbSteeringWheelFilled } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import Image from 'next/image';
import { objectDetail } from './ObjectsFile'
import { LuArrowDownUp } from "react-icons/lu";




function CategoryPage() {







    const [type, setType] = useState<string>('Sport')

    const [items, setItems] = useState<any[]>([])

    const [capacity, setCapacity] = useState()


    useEffect(() => {

        return setItems(objectDetail)



    }), [];



    let suvClick = () => {

        return setType('SUV')

    }

    let sportClick = () => {

        return setType('Sport')

    }

    let MPVClick = () => {

        return setType('MPV')

    }

    let SedanClick = () => {

        return setType('Sedan')

    }

    let CoupeClick = () => {

        return setType('Coupe')

    }

    let HatchbackClick = () => {

        return setType('Hatchback')
    }

    // let AllCarsClick = ()=> {

            

    // }



    return (
        <main className='flex justify-between items-start'>
            <div className='w-[300px] hidden  h-[1600px] bg-white md:flex flex-col justify-start p-8 items-start'>

                <h3 className='text-[12px] text-[#90A3BF] mb-4'>Type</h3>
                <nav className='text-[20px] text-[#1A202C] flex flex-col gap-3'>
                    {/* <ul className='text-[20px] text-[#1A202C] flex flex-col gap-3'> */}
                    {/* <div className='flex gap-2'><input type="radio" name="same" id="All-Cars" defaultChecked/><label htmlFor="All-Cars" className='cursor-pointer' onClick={AllCarsClick}>All Cars</label></div> */}
                    <div className='flex gap-2'><input type="radio" name="same" id="Sport" defaultChecked/><label htmlFor="Sport" className='cursor-pointer' onClick={sportClick}>Sport</label></div>
                    <div className='flex gap-2'><input type="radio" name="same" id="SUV" /><label htmlFor="SUV" className='cursor-pointer' onClick={suvClick}>SUV</label></div>
                    <div className='flex gap-2'><input type="radio" name="same" id="MPV" /><label htmlFor="MPV" className='cursor-pointer' onClick={MPVClick}>MPV</label></div>
                    <div className='flex gap-2'><input type="radio" name="same" id="Sedan" /><label htmlFor="Sedan" className='cursor-pointer' onClick={SedanClick}>Sedan</label></div>
                    <div className='flex gap-2'><input type="radio" name="same" id="Coupe" /><label htmlFor="Coupe" className='cursor-pointer' onClick={CoupeClick}>Coupe</label></div>
                    <div className='flex gap-2'><input type="radio" name="same" id="Hatchback" /><label htmlFor="Hatchback" className='cursor-pointer' onClick={HatchbackClick}>Hatchback</label></div>
                    {/* <input type="radio" name="sport" id="sport" /><li>SUV</li>
                        <input type="radio" name="sport" id="sport" /><li>MPV</li>
                        <input type="radio" name="sport" id="sport" /><li>Sedan</li>
                        <input type="radio" name="sport" id="sport" /><li>Coupe</li>
                        <input type="radio" name="sport" id="sport" /><li>Hatchback</li> */}
                    {/* </ul> */}
                </nav>

            </div>

            <div className='flex flex-col my-5  w-full'>

                <main className='w-full flex mb-5 justify-center items-center'>
                    <div className='w-full flex xl:flex-row flex-col justify-center gap-4 items-center'>
                        <div className='sm:w-[486px] w-full bg-white rounded-[5px] gap-4 py-2 px-1 sm:px-3 flex flex-col justify-center items-center'>

                            <div className='flex w-full justify-start p-2 text-left items-center gap-2'>
                                <input type="radio" name="" id="" checked />
                                <h3 className='text-base'>Pick-Up</h3>
                            </div>

                            <div className='w-full flex lg:gap-2 pb-3 px-1 justify-evenly items-center'>
                                <div className='flex flex-col gap-2 justify-center border-r-[1px] border-[#C3D4E9] items-start'>
                                    <h3 className='text-base font-bold'>
                                        Location
                                    </h3>

                                    {/* <ComboboxDemo /> */}
                                    <select name="hello" id="" aria-placeholder='hello' className='py-2 mr-1 px-2 sm:px-4 rounded-[5px] text-[12px] font-bold outline-none' >
                                        <option value="karachi">Karachi</option>
                                        <option value="islamabad">Islamabad</option>
                                        <option value="lahore">Lahore</option>
                                        <option value="multan">Multan</option>
                                        <option value="peshawar">Peshawar</option>
                                    </select>

                                </div>

                                <div className='flex flex-col gap-2 justify-center border-r-[1px] border-[#C3D4E9] items-start'>
                                    <h3 className='text-base font-bold'>
                                        Date
                                    </h3>

                                    {/* <DatePickerDemo /> */}
                                    <input type="date" name="Select Date" id="" placeholder='Select Date' className='w-[100px] sm:w-[140px] py-2 px-1 sm:px-4 rounded-[5px] text-[12px] font-bold' />
                                </div>
                                <div className='flex flex-col gap-2 justify-center items-start'>
                                    <h3 className='text-base font-bold'>
                                        Time
                                    </h3>

                                    {/* <DatePickerDemo /> */}
                                    <input type="time" name="" id="" className='py-2 w-[100px] sm:w-[140px] px-2 sm:px-4 rounded-[5px] text-[12px] font-bold' />

                                </div>
                            </div>

                        </div>

                        <div className='w-[60px] bg-[#3563E9] flex justify-center items-center text-[22px] text-white rounded-[5px] h-[60px]'>
                            <LuArrowDownUp />
                        </div>

                        <div className='sm:w-[486px] w-full bg-white rounded-[5px] gap-4 py-2 px-1 sm:px-3 flex flex-col justify-center items-center'>

                            <div className='flex w-full justify-start p-2 text-left items-center gap-2'>
                                <input type="radio" name="" id="" checked />
                                <h3 className='text-base'>Drop</h3>
                            </div>

                            <div className='w-full flex lg:gap-2 pb-3 px-1 justify-evenly items-center'>
                                <div className='flex flex-col gap-2 border-r-[1px] border-[#C3D4E9] justify-center items-start'>
                                    <h3 className='text-base font-bold'>
                                        Location
                                    </h3>

                                    {/* <ComboboxDemo /> */}
                                    <select name="" id="" className='py-2 px-2 mr-1 sm:px-4 rounded-[5px] text-[12px] font-bold outline-none' >
                                        <option value="karachi">Karachi</option>
                                        <option value="islamabad">Islamabad</option>
                                        <option value="lahore">Lahore</option>
                                        <option value="multan">Multan</option>
                                        <option value="peshawar">Peshawar</option>
                                    </select>

                                </div>

                                <div className='flex flex-col gap-2 justify-center items-start border-r-[1px] border-[#C3D4E9]'>
                                    <h3 className='text-base font-bold'>
                                        Date
                                    </h3>

                                    {/* <DatePickerDemo /> */}
                                    <input type="date" name="Select Date" id="" placeholder='Select Date' className='w-[100px] sm:w-[140px] py-2 px-1 sm:px-4 rounded-[5px] text-[12px] font-bold' />
                                </div>
                                <div className='flex flex-col gap-2 justify-center items-start'>
                                    <h3 className='text-base font-bold'>
                                        Time
                                    </h3>

                                    {/* <DatePickerDemo /> */}
                                    <input type="time" name="" id="" className='w-[100px] sm:w-[140px] py-2 px-2 sm:px-4 rounded-[5px] text-[12px] font-bold' />

                                </div>
                            </div>

                        </div>
                    </div>
                </main>

                
                {/* Data Map */}
                <div className='data-map w-full hidden md:flex   md:justify-between py-2 px-1 sm:px-3 items-center md:flex-wrap gap-3 '>



                    {
                        
                        items.filter((item) => item.type === type  ).map((item) => (

                            <main className='w-[304px] h-[240] sm:h-[388px] flex flex-col justify-between p-6 rounded-[5px] items-center bg-white relative'>
                                <div className='flex flex-col justify-between items-start w-full'>

                                    <div className='flex flex-col mb-6 justify-center items-start text-left'>
                                        <h3 className='text-[20px] font-bold text-[#1A202C]'>{item.name}</h3>
                                        <p className='text-[14px] font-bold text-[#90A3BF]'>{item.type}</p>
                                    </div>
                                    <div className='w-full flex flex-row sm:flex-col justify-between gap-3 sm:mb-2 '>
                                        <div className='w-[60%] sm:w-full h-[130px] sm:h-[200px] flex justify-center  items-center'>
                                            <Image src={item.image} alt='' width={232} height={130} />
                                        </div>

                                        <div className='w-[40%] sm:w-full flex sm:flex-row flex-col sm:justify-between justify-center  sm:items-center items-start gap-2 '>
                                            <div className='flex gap-2 justify-between items-center'><BsFillFuelPumpFill className='text-[#90A3BF] text-[14px]' /><p className='text-[#90A3BF] text-[14px]'>{item.fuel}</p></div>
                                            <div className='flex gap-2 justify-between items-center'><TbSteeringWheelFilled className='text-[#90A3BF] text-[14px]' /><p className='text-[#90A3BF] text-[14px]'>{item.transmission}</p></div>
                                            <div className='flex gap-2 justify-between items-center'><BsFillPeopleFill className='text-[#90A3BF] text-[14px]' /><p className='text-[#90A3BF] text-[14px]'>{item.capacity}</p></div>

                                        </div>
                                    </div>

                                </div>


                                <div className='flex justify-between w-full items-center'>
                                    <span className='text-base font-bold'>{item.rent}/<span className='text-[#90A3BF] font-medium'>{item.rentDetail}</span></span>
                                    <button className='p-2 bg-[#3563E9] text-base font-semibold text-white rounded-[5px]'>Rent Now</button>
                                </div>
                                <div className='absolute right-2 top-2'>
                                    <CiHeart />
                                </div>

                            </main>

                        )
                        )
                    }

                </div>

                <div className='data-map w-full flex flex-col md:hidden sm:flex-row sm:justify-between py-2 px-1 sm:px-3 items-center sm:flex-wrap gap-3 '>



                    {

                        items.map((item) => (

                            <main className='w-[304px] h-[240] sm:h-[388px] flex flex-col justify-between p-6 rounded-[5px] items-center bg-white relative'>
                                <div className='flex flex-col justify-between items-start w-full'>

                                    <div className='flex flex-col mb-6 justify-center items-start text-left'>
                                        <h3 className='text-[20px] font-bold text-[#1A202C]'>{item.name}</h3>
                                        <p className='text-[14px] font-bold text-[#90A3BF]'>{item.type}</p>
                                    </div>
                                    <div className='w-full flex flex-row sm:flex-col justify-between gap-3 sm:mb-2 '>
                                        <div className='w-[60%] sm:w-full h-[130px] sm:h-[200px] flex justify-center  items-center'>
                                            <Image src={item.image} alt='' width={232} height={130} />
                                        </div>

                                        <div className='w-[40%] sm:w-full flex sm:flex-row flex-col sm:justify-between justify-center  sm:items-center items-start gap-2 '>
                                            <div className='flex gap-2 justify-between items-center'><BsFillFuelPumpFill className='text-[#90A3BF] text-[14px]' /><p className='text-[#90A3BF] text-[14px]'>{item.fuel}</p></div>
                                            <div className='flex gap-2 justify-between items-center'><TbSteeringWheelFilled className='text-[#90A3BF] text-[14px]' /><p className='text-[#90A3BF] text-[14px]'>{item.transmission}</p></div>
                                            <div className='flex gap-2 justify-between items-center'><BsFillPeopleFill className='text-[#90A3BF] text-[14px]' /><p className='text-[#90A3BF] text-[14px]'>{item.capacity}</p></div>

                                        </div>
                                    </div>

                                </div>


                                <div className='flex justify-between w-full items-center'>
                                    <span className='text-base font-bold'>{item.rent}/<span className='text-[#90A3BF] font-medium'>{item.rentDetail}</span></span>
                                    <button className='p-2 bg-[#3563E9] text-base font-semibold text-white rounded-[5px]'>Rent Now</button>
                                </div>
                                <div className='absolute right-2 top-2'>
                                    <CiHeart />
                                </div>

                            </main>

                        )
                        )
                    }

                </div>
            </div>
        </main>
    )
}

export default CategoryPage