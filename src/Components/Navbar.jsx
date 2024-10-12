import React, { useState } from 'react'
import logo from '../assets/images/logo.svg'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'


const Navbar = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }

    return (
        <div>
            <div className='relative' >
                <div className='flex justify-between bg-white px-6 py-3 sm:px-0 md:px-16 md:py-8 fixed left-0 right-0 shadow-md items-center  z-20'>
                    <div>
                        <img src={logo} alt="" /></div>

                    <ul className='hidden lg:flex justify-between gap-8 text-gray-500 sm:text-[12px] md:text-[16px] sm:ml-4'>
                        <l1>Home</l1>
                        <l1>About</l1>
                        <l1>Contact</l1>
                        <l1>Blog</l1>
                        <l1>Careers</l1>
                    </ul>

                    <div onClick={handleClick}>
                        {click ? <AiOutlineClose size={40} className='hover:cursor-pointer' /> : <AiOutlineMenu size={40} className='lg:hidden hover:cursor-pointer' />}
                    </div>


                    <button className='hidden md:block bg-gradient-to-r from-[#31d35c] to-[#2bb7da] py-2 px-8 rounded-full text-white sm:text-[12px] md:text-[16px] sm:ml-4 md:ml-0'>Request Invite</button>
                </div>
                {click ? <div className='bg-black/60 h-screen top-0 left-0 w-full z-10 fixed'>
                </div> : ''}

                {click ? <div className='flex justify-center  '>
                    <ul className='flex flex-col justify-between fixed gap-8 text-gray-500 bg-white rounded xl z-20  mx-auto w-[350px] text-center p-4 mt-24'>
                        <l1>Home</l1>
                        <l1>About</l1>
                        <l1>Contact</l1>
                        <l1>Blog</l1>
                        <l1>Careers</l1>
                    </ul>
                </div> : ''}



            </div>

        </div>
    )
}

export default Navbar