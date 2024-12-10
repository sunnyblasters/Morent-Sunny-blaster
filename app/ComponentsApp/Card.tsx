import React from 'react'
import Image from 'next/image'
import { BsFillFuelPumpFill } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";
import { TbSteeringWheelFilled } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";



interface cardDetail {

    name:string,
    type:string,
    image:string,
    fuel:string,
    transmission:string,
    capacity:string
    rent:string,
    rentDetail:string
}

function Card(props:cardDetail) {
  return (
    <main className='w-[304px] h-[388px] flex flex-col justify-between p-6 rounded-[5px] items-center bg-white relative'>
        <div className='flex flex-col justify-between items-start w-full'>

                <div className='flex flex-col mb-6 justify-center items-start text-left'>
                  <h3 className='text-[20px] font-bold text-[#1A202C]'>{props.name}</h3>
                  <p className='text-[14px] font-bold text-[#90A3BF]'>{props.type}</p>
              </div>
              <div className='w-full h-[150px] flex justify-center  items-center'>
                <Image src={props.image} alt='' width={232} height={130}/>
              </div>
              

        </div>
        <div className='flex justify-between w-full items-center'>
            <div className='flex gap-2 justify-between items-center'><BsFillFuelPumpFill className='text-[#90A3BF] text-[14px]'/><p className='text-[#90A3BF] text-[14px]'>{props.fuel}</p></div>
            <div className='flex gap-2 justify-between items-center'><TbSteeringWheelFilled className='text-[#90A3BF] text-[14px]'/><p className='text-[#90A3BF] text-[14px]'>{props.transmission}</p></div>
            <div className='flex gap-2 justify-between items-center'><BsFillPeopleFill className='text-[#90A3BF] text-[14px]'/><p className='text-[#90A3BF] text-[14px]'>{props.capacity}</p></div>
            
        </div>

        <div className='flex justify-between w-full items-center'> 
            <span className='text-base font-bold'>{props.rent}/<span className='text-[#90A3BF] font-medium'>{props.rentDetail}</span></span>
            <button className='p-2 bg-[#3563E9] text-base font-semibold text-white rounded-[5px]'>Rent Now</button>
        </div>
        <div className='absolute right-2 top-2'>
            <CiHeart />
        </div>
    </main>
  )
}

export default Card