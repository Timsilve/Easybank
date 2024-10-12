import React from 'react'
import army from '../assets/images/bg-intro-desktop.svg'
import army2 from '../assets/images/bg-intro-mobile.svg'
import phone from '../assets/images/image-mockups.png'

const Hero = () => {
    return (
        <div className='overflow-x-hidden'>
            <div className='flex-col-reverse flex justify-between  md:ml-16 overflow-x-clip '>
                <div className='md:w-[37%] flex flex-col  md:mt-48 md:items-start gap-4 p-4 text-center md:text-start items-center '>
                    <div>    <h1 className='md:text-4xl lg:text-6xl py-2 text-5xl mx-auto md:mx-0'>
                        Next generation</h1>
                        <h1 className='md:text-4xl lg:text-6xl  text-5xl mx-auto md:mx-0'>digital banking</h1>
                    </div>

                    <p className='text-[16px] md:text-[18px] '>Take your financial life online. Your Easybank account will be a one-stop-shop
                        for spending, saving, budgeting, investing, and much more.
                    </p>

                    <button className=' bg-gradient-to-r from-[#31d35c] to-[#2bb7da] py-2 px-8 rounded-full text-white sm:text-[12px] md:text-[16px]'>Request Invite</button>


                </div>

                <div className='overflow-x-hidden'>

                    <div className='overflow-x-clip  '>
                        <img src={army} alt="" className='hidden md:block absolute  md:w-[550px] lg:w-[1000px] -top-16 -right-44 ' />
                        <img src={army2} alt="" className='relative sm:hidden w-[400px] ' />
                        <img src={phone} alt="" className='absolute  z-10 right-0 md:-top-4 sm:w-[300px] md:w-[450px] lg:w-[700px] -top-12' />


                    </div></div>



            </div>


        </div>


    )
}

export default Hero

