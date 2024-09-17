import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import { FaBars } from "react-icons/fa6";
import { ImCross } from "react-icons/im";



const Navbar = () => {
    let [show,setShow] = useState(false);

    let handleBars = () => {
        setShow(!show)
    }
  return (
    <nav className='bg-[#F40404] py-4'>
        <div className="max-w-container mx-auto">
            <div className="flex items-center">
              <div className="w-1/4">
              <img src={Logo} alt="" />
              </div>
              <div className="w-3/4">
              <ul className='flex justify-end md:items-center lg:hidden'>
                <li className='text-[16px] font-pops text-white font-semibold hover:text-[#000000] duration-300 ease-in-out p-4'>home</li>
                <li className='text-[16px] font-pops text-white font-semibold hover:text-[#000000] duration-300 ease-in-out p-4'>About</li>
                <li className='text-[16px] font-pops text-white font-semibold hover:text-[#000000] duration-300 ease-in-out p-4'>Services</li>
                <li className='text-[16px] font-pops text-white font-semibold hover:text-[#000000] duration-300 ease-in-out p-4'>Gallery</li>
                <li className='text-[16px] font-pops text-white font-semibold hover:text-[#000000] duration-300 ease-in-out p-4'>Blog</li>
                <li className='text-[16px] font-pops text-white font-semibold hover:text-[#000000] duration-300 ease-in-out border-2 border-[white] hover:border-[#282828] rounded-xl p-4 shadow-lg shadow-2xl ...'>CONTACT</li>
              </ul>
              </div>
              <div onClick={handleBars} className="lg:hidden cursor-pointer">
                {show == true ? <ImCross />: <FaBars />}

              </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar