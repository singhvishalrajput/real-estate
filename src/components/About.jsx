import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center container mx-auto p-14  md:px-20 lg:px-32 w-full overflow-hidden ' id='About'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 '>About <span className='underline underline-offset-4 decoration-1 under font-light'>Us</span> </h1>
      <p className='text-silver-500 max-w-80 text-center mb-8'>Passionate About Properties, Dedicated to Your Vision</p>
    
        <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
            <img src={assets.brand_img} alt="" className='w-full sm:w-1/2 max-w-large' />
            <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
                <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl pr-28'>
                    <div>
                        <p className='text-4xl font-mdeium text-gray-800'>10+</p>
                        <p>Years of Excellence</p>
                    </div>
                    <div>
                        <p className='text-4xl font-mdeium text-gray-800'>12+</p>
                        <p>Projects Completed</p>
                    </div>
                    <div>
                        <p className='text-4xl font-mdeium text-gray-800'>20+</p>
                        <p>Mn. Sq. Ft. Delivered</p>
                    </div>
                    <div>
                        <p className='text-4xl font-mdeium text-gray-800'>25+</p>
                        <p>Ongoing projects</p>
                    </div>
                </div>
                <p className='my-10 max-w-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, libero. Delectus harum necessitatibus, velit expedita vitae eius repudiandae neque corporis quasi praesentium dolore pariatur consequuntur quo consectetur fuga eum illum inventore ad vel. Distinctio nemo nam ipsam ad sunt facilis praesentium asperiores voluptates, voluptatem debitis dolore, molestiae quasi qui veritatis.</p>
                <button className='bg-blue-600 text-white px-8 py-2 rounded'>Learn More</button>
            </div>
        </div>

    </div>

  )
}

export default About
