import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='bg-gray-200 flex flex-col items-center justify-center container mx-auto p-14  md:px-20 lg:px-32 w-full overflow-hidden ' id='About'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 '>About <span className='underline underline-offset-4 decoration-1 under font-light'>Us</span> </h1>
      <p className='text-silver-500 max-w-80 text-center mb-8'>Passionate About Properties, Dedicated to Your Vision</p>
    
        <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
            <img src={assets.brand_img} alt="" className='sm:w-1/2 md:w-1/2' />
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
                <p className='my-10 max-w-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum rem, eum libero quaerat aliquid voluptatibus. Ipsa delectus similique commodi, sint ex reiciendis nostrum atque quos, itaque placeat beatae eius illo ratione autem? Excepturi odit labore corrupti provident quis dolor accusantium sunt alias tempora quo suscipit, incidunt reiciendis in cum eius id ducimus, modi corporis voluptatum doloremque dolores. Nam, suscipit nostrum ea quidem, ipsum illo accusamus consequatur temporibus nihil repellendus deserunt officia aperiam fuga? Vitae quam necessitatibus asperiores. Officiis qui eius alias, aspernatur, quia aliquid nesciunt at quae saepe totam neque aliquam ipsum quidem, perferendis tempore velit consectetur exercitationem ullam eum.</p>
                <button className='bg-blue-600 text-white px-8 py-2 rounded'>Learn More</button>
            </div>
        </div>

    </div>

  )
}

export default About
