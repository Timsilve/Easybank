import React from 'react'
import logo from '../assets/images/logo.svg'
import { FaFacebook, FaInstagram, FaPinterest, FaYoutube, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='bg-[#2d314d] md:p-16 text-white py-12'>
            <div className='flex md:flex-row flex-col justify-center items-center text-center md:justify-between '>
                <div className='flex flex-col'>
                    <img src={logo} alt="logo" className='bg-cyan-50 mb-14' />
                    <ul className='flex gap-2'>
                        <FaFacebook size={20} />
                        <FaYoutube size={20} />
                        <FaTwitter size={20} />
                        <FaPinterest size={20} />
                        <FaInstagram size={20} />                    </ul>
                </div>
                <div>
                    <ul className='flex flex-col sm:gap-4 gap-2'>
                        <li className='mt-4 sm:mt-0'>About us</li>
                        <li>Contact</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div>
                    <ul className='flex flex-col gap-4'>
                        <li>Careers</li>
                        <li>Support</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className='flsx flex-col'>
                    <button className='mb-14 bg-gradient-to-r from-[#31d35c] to-[#2bb7da] py-2 px-8 rounded-full text-white mt-4 sm:mt-0'>
                        Request Invite
                    </button>
                    <p>© Easybank. All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer