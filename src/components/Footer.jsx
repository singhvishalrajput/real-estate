import React from 'react'
import { assets } from '../assets/assets'
import {motion} from 'framer-motion'
const Footer = () => {
  return (
    <motion.div 
      initial={{opacity : 0, y:100}}
      transition={{duration:1.5}}
      whileInView={{opacity: 1, y:0}}
    className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden py-2' id='Footer'>
        <div className='container mx-auto flex flex-col md:flex-row  justify-between items-start'>
            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                <img className='w-36' src={assets.logo} alt="logo" />
                <p className='text-gray-400 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ducimus cum quae ut maxime, quam quaerat corrupti excepturi natus quis autem aperiam atque! Ducimus porro libero harum repellat fugiat dignissimos!</p>   
            </div>
            <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
                <ul className='flex flex-col gap-2 text-gray-400'>
                    <a href="#Header" className='hover:text-white'>Home</a>
                    <a href="#Projects" className='hover:text-white'>Projects</a>
                    <a href="#About" className='hover:text-white'>About us</a>
                    <a href="#Contact" className='hover:text-white'>Contact us</a>
                    <a href="#" className='hover:text-white'>Privacy Policy</a>
                </ul>
            </div>
            <div className='w-full md:w-1/3 '>
                <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our newsletter</h3>
                <p className='text-gray-400 mb-4 max-w-80'>the latest news, articles, and resources, sent to your inbox weekly.</p>
                <div className='mb-8 flex gap-2 '>
                    <input type="email" placeholder='Enter your email' className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-1/2 md:w-auto'/>
                    <button  className='py-2 px-4 rounded bg-blue-500 text-white'>Subscribe</button>
                </div>
            </div>
        </div>
        <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
            Copyright 2024 © Estoria. All Right Reserved. 
        </div>
    </motion.div>
  )
}

export default Footer
