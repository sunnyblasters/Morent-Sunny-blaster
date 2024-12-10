import React from 'react'
import Link from 'next/link'
import { SendHorizontal } from 'lucide-react';
import { BsQrCode } from "react-icons/bs";
import Image from 'next/image';
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";




function Footer() {
    return (
        <main className='w-full  py-10  flex flex-col justify-center items-center sm:bg-white gap-4'>
            <div className='w-[100%] sm:w-[90%]  px-1 sm:px-4 md:px-0 md:gap-8 gap-3 lg:gap-0 flex flex-wrap lg:flex-row justify-between items-center'>
                
                <div className='w-full px-3 sm:px-0 mb-4 sm:mb-0 sm:w-[292px] logo self-start flex flex-col gap-3 justify-start'>
                    <h3 className='text-[32px] font-bold text-[#3563E9]'>Morent</h3>
                    <p className='text-[14px] w-[292px] font-normal text-[#90A3BF]  sm:text-[#596780]'>Our vision is to provide convenience and help increase your sales business.</p>

                </div>
                
                <div className='w-[160px] flex flex-col gap-4 p-2  justify-start'>
                    <h3 className='text-[20px] font-medium text-black'>About</h3>
                    <ul className='flex flex-col gap-2 '>
                        <Link href={'/'}><li className='text-base text-[#90A3BF] sm:text-[#596780] font-normal text-left pb-2'>How it works</li></Link>
                        <Link href={'/'}><li className='text-base text-[#90A3BF] sm:text-[#596780] font-normal text-left pb-2'>Featured</li></Link>
                        <Link href={'/'}><li className='text-base text-[#90A3BF] sm:text-[#596780] font-normal text-left pb-2'>Partnership</li></Link>
                        <Link href={'/wishList'}><li className='text-base text-[#90A3BF] sm:text-[#596780] font-normal text-left pb-2'>Bussiness Relation</li></Link>
                        
                    </ul>
                </div>
                <div className='w-[160px]  flex flex-col gap-4 p-2  justify-start '>
                    <h3 className='text-[20px] font-medium text-black'>Community</h3>
                    <ul className='flex flex-col gap-2'>
                        <Link href={'/'}><li className='text-base text-[#90A3BF] sm:text-[#596780]  font-normal text-left pb-2'>Events</li></Link>
                        <Link href={'/'}><li className='text-base text-[#90A3BF] sm:text-[#596780]  font-normal text-left pb-2'>Blog</li></Link>
                        <Link href={'/'}><li className='text-base text-[#90A3BF] sm:text-[#596780]  font-normal text-left pb-2'>Podcast</li></Link>
                        <Link href={'/'}><li className='text-base text-[#90A3BF] sm:text-[#596780]  font-normal text-left pb-2'>Invite a friend</li></Link>

                    </ul>
                </div>
                
                <div className='w-[160px] flex flex-col gap-4 p-2  justify-start '>
                    <h3 className='text-[20px] font-medium text-black'>Socials</h3>
                    <ul className='flex flex-col gap-2'>
                        <Link href={'/'}><li className='text-base text-[#90A3BF] sm:text-[#596780]  font-normal text-left pb-2'>Discord</li></Link>
                        <Link href={'/'}><li className='text-base text-[#90A3BF] sm:text-[#596780]  font-normal text-left pb-2'>Instagram</li></Link>
                        <Link href={'/'}><li className='text-base text-[#90A3BF] sm:text-[#596780]  font-normal text-left pb-2'>Twitter</li></Link>
                        <Link href={'/'}><li className='text-base text-[#90A3BF] sm:text-[#596780]  font-normal text-left pb-2'>Facebook</li></Link>

                    </ul>
                </div>

            </div>



            <div className='w-full px-4 sm:px-0 sm:w-[90%] flex md:flex-row flex-col-reverse gap-5 justify-between items-center mt-6'>
                <div className=' w-full md:w-[50%] flex justify-start'><h3 className='text-[14px] sm:text-base'>&copy; Copyright Rimel 2022. All right reserved</h3></div>
                <div className='flex w-full md:w-[50%] justify-between md:justify-end items-center gap-10'><h3 className='text-black text-[14px] sm:text-base'>Policy & Privacy</h3><h3 className='text-[14px] sm:text-base'>Terms & Condition</h3></div>

            </div>
        </main>
    )
}

export default Footer