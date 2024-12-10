import React from 'react'
import './heroSection.css'


function HeroSection() {
  return (
    <main className='w-full flex justify-center items-center my-[50px]'>
        <div className='w-[90%] gap-5 flex flex-col md:flex-row justify-center items-center'>
            
            <div className='bg-[#54A6FF] rounded-[5px] md:w-[50%] hidden md:flex w-full hero-sec justify-start items-start gap-3 pt-4 pl-4 pr-4 sm:pt-6 sm:pl-6 heroImg1  flex-col'>

                <h3 className='text-white hidden md:flex'>
                    The Best Platform <br/>for Car Rental
                </h3>

                <h3 className='text-white flex md:hidden'>
                    The Best Platform for Car Rental
                </h3>

                <p className='text-white'>
                    Ease of doing a car rental safely and<br/>reliably. Of course at a low price.
                </p>

                <button className='text-white bg-[#3563E9] hover:text-black transition-all py-2 px-4 rounded-[4px]'>Rental Car</button>
            </div>

            <div className='bg-[#3563E9] rounded-[5px] md:w-[50%] w-full hero-sec justify-start items-start gap-3 pt-4 pl-4 sm:pt-6 pr-4 sm:pl-6 heroImg2 flex flex-col'>

                <h3 className='text-white hidden md:flex'>
                    The Best Platform <br/>for Car Rental
                </h3>

                <h3 className='text-white flex md:hidden'>
                    The Best Platform for Car Rental
                </h3>

                <p className='text-white'>
                    Ease of doing a car rental safely and<br/>reliably. Of course at a low price.
                </p>

                <button className='text-white bg-[#54A6FF] hover:text-black py-2 px-4 rounded-[4px]'>Rental Car</button>
            </div>

        </div>
    </main>
  )
}

export default HeroSection