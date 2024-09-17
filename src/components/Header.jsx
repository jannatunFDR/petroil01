import React from 'react'
import { MdMarkEmailRead, MdAddCall } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";










const Header = () => {
  return (
    <header className='py-1 bg-hbg'>
        <div className="max-w-container mx-auto">
            <div className="flex items-center flex-wrap">
                <div className="w-full lg:w-1/4">
                <div className="flex items-center gap-x-1 text-center justify-center lg:justify-start">
                    <MdMarkEmailRead className='text-white' />
                    <p className='text-white font-pops'>mail@yourcompany.com</p></div></div>
                <div className="w-full lg:w-1/4 py-2 lg:py-1">
                <div className="flex items-center gap-x-1 text-center justify-center">
                    <MdAddCall className='text-white' />
                    <p className='text-white font-pops'>+896 120 5889 (Toll free)</p>
                    </div>
                    </div>
                <div className="w-full lg:w-1/2">
                <div className="flex gap-x-4 lg:justify-end text-center justify-center">
                    <FaFacebookF className='text-white' />
                    <FaTwitter className='text-white' />
                    <FaLinkedinIn className='text-white' />
                    <FaInstagram className='text-white' />

                </div>
                
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header