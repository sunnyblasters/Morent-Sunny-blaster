
'use client'
import React, { useEffect, useState } from 'react'
import { BsFillFuelPumpFill } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";
import { TbSteeringWheelFilled } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import Image from 'next/image';
import { objectDetail } from './ObjectsFile'







function RecommendationCar() {

    const [items, setItems] = useState<any[]>([])
    const [visible, setVisible] = useState(4)


    useEffect(() => {

        return setItems(objectDetail)

    }), [];

    const showMoreItems = () => {

        setVisible((prevValue) => (prevValue + 4))
    }


    return (
        <main className='w-full  my-10 justify-center items-center'>
            <div className='w-full flex-col justify-center items-center gap-3'>
                <div className='flex px-14 mb-6 justify-between items-center '>
                    <h3 className='text-[#90A3BF] text-base font-semibold'>Recommendation Car</h3>
                    <span className='hidden sm:flex text-base text-[#3563E9] font-semibold'>View All</span>
                </div>
                <div className='flex flex-wrap lg:justify-center justify-around items-center gap-3'>
                    {
                        items.slice(0, visible).map((item) => (

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

                    <div className='my-10 w-full flex justify-center items-center'><button onClick={showMoreItems} className='px-6 py-3 bg-[#3563E9] text-white rounded-[5px]'>showMoreItems</button></div>
                </div>

            </div>
        </main>
    )
}

export default RecommendationCar