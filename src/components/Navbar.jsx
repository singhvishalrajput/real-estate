import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {

    const [MobileMenu, setMobileMenu] = useState(false)

    // useEffect(()=>{
    //     if(MobileMenu){
    //         document.body.style.overflow = 'hidden'
    //     }else{
    //         document.body.style.overflow = 'auto'
    //     }
    //     return ()=>{
    //         document.body.style.overflow = 'auto'
    //     }
    // },[MobileMenu])

  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        <img src={assets.logo} alt="" className='md:w-42 h-12'/>
        <ul className='hidden md:flex gap-7 text-white'>
            <a href="#header" className='cursor-pointer hover:text-gray-400'>Home</a>
            <a href="#Projects" className='cursor-pointer hover:text-gray-400'>Projects</a>
            <a href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
            {/* <a href="#header" className='cursor-pointer hover:text-gray-400'>Contact Us</a> */}
        </ul>
        <a href="#Contact"><button className='hidden md:block bg-white px-8 py-2 rounded-full'>Contact us</button></a>
        <img onClick={()=> setMobileMenu(true)} src={assets.menu_icon} alt="" className='md:hidden w-7 cursor-pointer '/>
      </div>
      {/* --------mobile-menu----------- */}
      <div  className={`md:hidden ${ MobileMenu ? 'fixed w-full' : 'h-0 w-0'}  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
        <div className='flex justify-end p-6 cursor-pointer'>
            <img onClick={()=> setMobileMenu(false)} src={assets.cross_icon} className='w-6 cursor-pointer' alt="" />
        </div>
        <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium '>
            <a onClick={()=> setMobileMenu(false)} href="#Header" className='px-4 py-2 rounded-full inline-block'>Home</a>
            <a onClick={()=> setMobileMenu(false)} href="#About" className='px-4 py-2 rounded-full inline-block'>About</a>
            <a onClick={()=> setMobileMenu(false)} href="#Projects" className='px-4 py-2 rounded-full inline-block'>Projects</a>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
